import {Component} from '@angular/core';

@Component({
  selector: 'pipe',
  template: '<p> total price of the product {{price | currency}} </p>'
})
export default class pricePipe {

price: number = 100.89;

}


@Component({
  selector: 'pipe',
  template: '<p> total price of the product {{price | currency : "CAD" : true : "1.2.4"}} </p>'
})
export default class pricePipe {

price: number = 100.89;

}
@Component({
  selector: 'pipe',
  template: '<p> total price of the product {{data | lowercase}} </p>'
})
export default class pricePipe {

data: string = 'Tarun sharma';

}
