
import {Pipe,PipeTransform}  from '@angular/core';


@Pipe({
    name: 'delay',
    pure : false
})
export class delayPipe implements PipeTransform {

    private fetchedValue : number;
    private fetchPromise : Promise<number>;


  transform(value: number): number {
    if (!this.fetchPromise) {
       this.fetchPromise = new Promise<number>((resolve,reject) =>{
           setTimeout(()=> resolve(value*1000));
       })  
       this.fetchPromise.then(function(value){
           this.fetchedValue = value ;                           
       })

       return this.fetchedValue;
    }
  }
}