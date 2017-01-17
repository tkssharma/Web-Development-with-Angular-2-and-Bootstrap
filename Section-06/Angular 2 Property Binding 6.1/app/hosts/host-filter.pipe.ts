import {PipeTransform, Pipe } from '@angular/core';
import { IHost} from './host';

@Pipe({
    name: 'hostFilter'
})
export class HostFilterPipe implements PipeTransform {

    transform(value: IHost[], args: string[]): IHost[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: IHost) =>
            product.hostName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}