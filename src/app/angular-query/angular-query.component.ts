import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'angular-query',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    @if(query.isSuccess()) {
    {{ query.data() | json }}
    } @if(query.isError()) { Something went wrong } @if(query.isLoading()) {
    Loading in progress }
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularQueryComponent {
  innerData: any;
  http = inject(HttpClient);

  query = injectQuery(() => ({
    queryKey: ['contries'],
    queryFn: () =>
      lastValueFrom(this.http.get('https://restcountries.com/v3.1/all')),
  }));
}
