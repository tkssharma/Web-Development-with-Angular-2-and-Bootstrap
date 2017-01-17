import {Component, OnDestroy} from '@angular/core';
import {NgClass} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Host, Review, HostService} from '../../services/host-service';
import StarsComponent from '../stars/stars';

@Component({
  selector: 'auction-product-page',
  styles: ['auction-stars.large {font-size: 24px;}'],
  templateUrl: 'app/components/host-detail/host-detail.html',
  directives: [NgClass, StarsComponent]
})
export default class HostDetailComponent implements OnDestroy {
  product: Host;
  reviews: Review[];

  currentBid: number;
  newComment: string;
  newRating: number;

  isReviewHidden: boolean = true;
  isWatching: boolean = false;

  private subscription: Subscription;

  constructor(
      route: ActivatedRoute,
      productService: HostService) {

    const hostId = parseInt(route.snapshot.params['hostId']);

    productService
      .getHostById(productId)
      .subscribe(
        product => {
          this.product = product;
          this.currentBid = product.price;
        },
        error => console.error(error));

    productService
      .getReviewsForHost(productId)
      .subscribe(
        reviews => this.reviews = reviews,
        error => console.error(error));
  }

/* add a router guard to unsubscribe on deactivate*/

  ngOnDestroy(): any {
    //if (this.subscription) {
    //  this.subscription.unsubscribe();
    //}
  }

  addReview() {
    let review = new Review(0, this.product.id, new Date(), 'Anonymous',
      this.newRating, this.newComment);
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);

    this.resetForm();
  }

  averageRating(reviews: Review[]) {
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
}
