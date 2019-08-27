import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  errorMessage: string;
  // Class Data
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
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  // Class Functions
  constructor(private productService: ProductService) {
    this.listFilter = '';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  // on init, load this data (useful for pulling in data from Service / or DB)
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        console.log(this.products);
        this.filteredProducts = this.products;
        console.log(this.filteredProducts);
       },
      error: err => { this.errorMessage = err; }
    });
  }
}
