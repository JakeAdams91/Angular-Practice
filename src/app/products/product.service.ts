// Service: think Vuex store.
import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): IProduct[] {
    return [
      {
        productId: 1,
        message: 'git add .',
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2019',
        description: '15 gallon capacity garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'N/A'
      },
      {
        productId: 4,
        message: 'git commit',
        productName: 'Duplex Nailes',
        productCode: 'NNN-0123',
        releaseDate: 'March 18, 2019',
        description: '100lbs Duplex nails',
        price: 42.00,
        starRating: 2.2,
        imageUrl: 'N/A'
      },
      {
        productId: 2,
        message: 'git push',
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2019',
        description: '21oz Framing Hammer',
        price: 26.99,
        starRating: 4.8,
        imageUrl: 'N/A 2.0'
      },
      {
        productId: 3,
        message: 'git pull',
        productName: 'Nail Puller',
        productCode: 'TBX-0049',
        releaseDate: 'May 15, 2019',
        description: '9" Cats Paw',
        price: 14.99,
        starRating: 3.1,
        imageUrl: 'N/A 2.0'
      },
      {
        productId: 5,
        message: 'jsj',
        productName: 'Concrete Mixer',
        productCode: 'MXR-0018',
        releaseDate: 'May 21, 2019',
        description: 'Mixes up to 500lbs',
        price: 599.99,
        starRating: 3.8,
        imageUrl: 'N/A 2.0'
      },
      {
        productId: 6,
        message: 'sja',
        productName: '48" Level',
        productCode: 'LVL-0060',
        releaseDate: 'May 15, 2019',
        description: 'Made of Titanium Plastic',
        price: 208.99,
        starRating: 4.7,
        imageUrl: 'N/A 2.0'
      }
    ];
  }
}
