import {PipeTransform,Component,Pipe,OnInit } from '@angular/core';

import { IHost } from './host'
import { HostFilterPipe } from './host-filter.pipe';

@Component({
    selector: 'pm-hosts',
    templateUrl: 'app/hosts/host-list.component.html',
    styleUrls: ['app/hosts/host-list.component.css']
})
export class HostListComponent implements OnInit {
    pageTitle: string = 'All Host List';

    imageWidth: number = 200;
    imageHeight : number = 100;

    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'All dishes from Hosts';
    hosts: IHost[] = [{
        "hostId": 1,
        "hostName": "Tarun",
        "hostCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "image": "/app/images/kk1.jpg",
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "hostId": 2,
        "hostName": "Mac novard",
        "hostCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "image": "/app/images/kk2.jpg",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "hostId": 5,
        "hostName": "john",
        "hostCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "image": "/app/images/kk3.jpg",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "hostId": 8,
        "hostName": "Ted",
        "hostCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "image": "/app/images/kk1.jpg",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "hostId": 10,
        "hostName": "Ani Donna",
        "hostCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "image": "/app/images/kk2.jpg",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }

}