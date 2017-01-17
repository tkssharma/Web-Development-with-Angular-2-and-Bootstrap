    import {Component} from '@angular/core';
    import {Product} from '../../services/product-service';
    import ProductItemComponent from '../product-item/product-item';

    @Component({
      selector: 'host-home',
      styleUrls: ['/home.css'],
      template: `
        <div class="row">
          <div *ngFor="let product of products" class="col-sm-4 col-lg-4 col-md-4">
            <host-product-item [product]="product"></host-product-item>
          </div>
        </div>
      `
    })
    export default class HomeComponent {
      constructor() {
      }
      products: Product[]= [
      {
        "id": 0,
        "title": "First Dish",
        "price": 24.99,
        "rating": 4.3,
        "image" : "/app/images/kk1.jpg",
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
      },
      {
        "id": 1,
        "title": "Second Dish",
        "price": 64.99,
        "image" : "/app/images/kk2.jpg",
        "rating": 3.5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
      },
      {
        "id": 2,
        "title": "Third Dish",
        "price": 74.99,
        "image" : "/app/images/kk3.jpg",
        "rating": 4.2,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics"]
      },
      {
        "id": 3,
        "title": "Fourth Dish",
        "price": 84.99,
        "image" : "/app/images/kk1.jpg",
        "rating": 3.9,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["hardware"]
      },
      {
        "id": 4,
        "title": "Fifth Dish",
        "price": 94.99,
        "image" : "/app/images/kk2.jpg",
        "rating": 5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
      },
      {
        "id": 5,
        "title": "Sixth Dish",
        "price": 54.99,
        "image" : "/app/images/kk3.jpg",
        "rating": 4.6,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
      }
    ];

    }
