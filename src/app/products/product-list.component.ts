import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle = 'Product List';
  // tslint:disable-next-line: no-inferrable-types
  showImage: boolean = false;
  // tslint:disable-next-line: no-inferrable-types
  listFilter: string = 'cart';
  products: any[] = [
    {
      productId: 2,
      message: 'Hello',
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'N/A'
    },
    {
      productId: 5,
      message: 'git push --force master',
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2019',
      description: '21oz Framing Hammer',
      price: 26.99,
      starRating: 4.8,
      imageUrl: 'N/A 2.0'
    },
    {
      productId: 6,
      message: 'git pull',
      productName: 'Nail Puller',
      productCode: 'TBX-0049',
      releaseDate: 'May 15, 2019',
      description: '9" Cats Paw',
      price: 14.99,
      starRating: 4.1,
      imageUrl: 'N/A 2.0'
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
