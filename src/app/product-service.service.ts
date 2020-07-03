import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor() { }

  private products : any = [
      {
        "prodId":1,
        "prodName":"Fan",
        "prodPrice":2000,
      },
      {
        "prodId":2,
        "prodName":"AC",
        "prodPrice":7000,
      },
      {
        "prodId":3,
        "prodName":"Watch",
        "prodPrice":12000,
      },

      {
        "prodId":4,
        "prodName":"Phone",
        "prodPrice":13000,
      },
    ];

  getProducts(){
  	return this.products;
  }
}
