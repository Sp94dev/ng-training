import { computed, signal } from '@angular/core';
import { single } from 'rxjs';

const goodBye = 'Good bye';
class Examples {
  // example1
  //   exampleVariable = 'Hello from Variable';
  //   exampleSignal = signal('Hello from signal');
  //   changeSignal() {
  //     this.exampleSignal.set('Hello from signal');
  //   }
  //   changeVariable() {
  //     this.exampleVariable = 'Good bye';
  //   }
  //   example2
  //   exampleVariable = { va1: 'Hello', val2: 'from variable' };
  //   exampleSignal = signal({ va1: 'Hello', val2: 'from signal' });
  //   changeSignal() {
  //     this.exampleSignal.set({ va1: goodBye, val2: 'from signal' });
  //   }
  //   changeVariable() {
  //     this.exampleVariable = { va1: goodBye, val2: 'from variable' };
  //   }
  //   example 3
  //   var1 = 'Hello';
  //   var2 = 'from variable';
  //   signal1 = signal('Hello');
  //   signal2 = signal('from signal');
  //   exampleVariable = { va1: this.var1, val2: this.var2 };
  //   exampleSignal = computed(() => ({
  //     val1: this.signal1(),
  //     val2: this.signal2(),
  //   }));
  //   changeSignal() {
  //     this.signal1.set(goodBye);
  //   }
  //   changeVariable() {
  //     this.var1 = goodBye;
  //   }
}
