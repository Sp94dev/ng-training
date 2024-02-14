import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { Product, ProductsService } from './selected-products.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="grid grid-cols-2">
      <div class="col-span-2 flex justify-center">
        <p-button severity="secondary" (onClick)="addProduct()"
          >Add product</p-button
        >
      </div>
      <!-- Signals -->
      <div class="flex flex-col">
        <h4 class="text-center">
          Signals, products count: {{ signalProductsAmount() }}
        </h4>
        @for (product of signalsProducts(); track $index) {
        <p class="text-center">{{ product | json }}</p>
        }
      </div>
      <!-- Variables -->
      <div class="flex flex-col">
        <h4 class="text-center">Variables {{ amount }}</h4>
        @for (product of varProducts; track $index) {
        <p class="text-center">{{ product | json }}</p>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  private selectedProductsService = inject(ProductsService);

  signalsProducts = this.selectedProductsService.signalProducts.asReadonly();
  varProducts = this.selectedProductsService.varProducts;
  amount = this.selectedProductsService.varProducts.length;
  signalProductsAmount = computed(
    () => this.selectedProductsService.signalProducts().length
  );

  constructor() {
    effect(() => {
      if (!this.selectedProductsService.signalProducts().length) {
        return;
      }
      const lastProductIndex =
        this.selectedProductsService.signalProducts().length - 1;
      const lastProduct =
        this.selectedProductsService.signalProducts()[lastProductIndex];

      console.log(
        `New product added ==> ${lastProduct.name}(${lastProduct.id})`
      );
    });
  }

  addProduct() {
    this.addVarProduct();
    this.addSignalProduct();
  }

  addVarProduct() {
    const newProduct: Product = {
      id: (Math.random() * 100).toFixed(),
      name: `product-${this.selectedProductsService.varProducts.length}`,
    };

    this.selectedProductsService.addVarProduct(newProduct);
    this.varProducts = this.selectedProductsService.varProducts;
    this.amount = this.selectedProductsService.varProducts.length;
  }

  addSignalProduct() {
    const newProduct: Product = {
      id: `ppr${(Math.random() * 100).toFixed()}`,
      name: `product-${this.selectedProductsService.varProducts.length}`,
    };

    this.selectedProductsService.addSignalProduct(newProduct);
  }
}
