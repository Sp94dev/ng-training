import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductsComponent } from './product/product.component';

const goodBye = 'Good bye';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, ButtonModule, ProductsComponent],
  template: `
    <!-- <div class="grid grid-cols-2 justify-center items-center p-12 gap-2">
      <span>
        <p>Signal value:</p>
        <p>{{ exampleSignal() | json }}</p>
      </span>
      <p-button
        styleClass="w-1/2"
        label="Change Signal"
        (onClick)="changeSignal()"
      />
      <span>
        <p>Variable value:</p>
        <p class="w-full">{{ exampleVariable | json }}</p>
      </span>
      <p-button
        styleClass="w-1/2"
        label="Change Variable"
        (onClick)="changeVariable()"
      />
    </div> -->
    <app-products />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {
  var1 = 'Hello';
  var2 = 'from variable';

  signal1 = signal('Hello');
  signal2 = signal('from signal');

  exampleVariable = { va1: this.var1, val2: this.var2 };

  exampleSignal = computed(() => {
    const newVal = {
      val1: this.signal1(),
      val2: this.signal2(),
    };

    return newVal;
  });

  changeSignal() {
    this.signal1.set(goodBye);
  }
  changeVariable() {
    this.var1 = goodBye;
  }
}
