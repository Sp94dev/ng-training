import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent-child/parent/parent.component';

import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ParentComponent,
    RouterLink,
    ButtonModule,
    AngularQueryDevtools,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-training';
}
