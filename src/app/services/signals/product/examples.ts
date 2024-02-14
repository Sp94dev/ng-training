// *********** EFFECTS *****************
// constructor() {
//     effect(() => {
//       if (!this.selectedProductsService.signalProducts().length) {
//         return;
//       }
//       const lastProductIndex =
//         this.selectedProductsService.signalProducts().length - 1;
//       const lastProduct =
//         this.selectedProductsService.signalProducts()[lastProductIndex];

//       console.log(
//         `New product added ==> ${lastProduct.name}(${lastProduct.id})`
//       );
//     });
//   }

// *********** COMPUTED *****************
// signalProductsAmount = computed(
//     () => this.selectedProductsService.signalProducts().length
//   );

// <h4 class="text-center">
// Signals, products count: {{ signalProductsAmount() }}
// </h4>
