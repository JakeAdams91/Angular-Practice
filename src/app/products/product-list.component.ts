import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  // tslint:disable-next-line: no-inferrable-types
  showImage: boolean = false;
  // tslint:disable-next-line: no-inferrable-types
  filterString: string = 'cart';

  get listFilter(): string {
    return this.filterString;
  }
  set listFilter(value: string) {
    this.filterString = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [
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
      starRating: 3.1,
      imageUrl: 'N/A 2.0'
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = '';
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    console.log('in OnInit');
  }
}
