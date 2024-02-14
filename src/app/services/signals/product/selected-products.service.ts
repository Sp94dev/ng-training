import { Injectable, signal } from '@angular/core';

export interface Product {
  name: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  varProducts: Product[] = [];
  signalProducts = signal<Product[]>([]);

  addVarProduct(product: Product) {
    this.varProducts = [...this.varProducts, product];
  }

  addSignalProduct(product: Product) {
    this.signalProducts.set([...this.signalProducts(), product]);

    // this.signalProducts.update((products) => [...products, product]);
  }
}
