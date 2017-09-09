import { Injectable }   from '@angular/core';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string) {
  }
}

@Injectable()
export class ProductService {
  getProduct(): Product {
    return new Product( 0, "iPhone 7", 249.99, "The latest iPhone, 7-inch screen");
  }
  getListProduct() : Product[]{
    return [
      new Product( 0, "iPhone 71", 249.99, "The latest iPhone, 7-inch screen"),
      new Product( 0, "iPhone 72", 249.99, "The latest iPhone, 7-inch screen"),
      new Product( 0, "iPhone 73", 249.99, "The latest iPhone, 7-inch screen"),
      new Product( 0, "iPhone 74", 249.99, "The latest iPhone, 7-inch screen")
    ];
  }
}
