import { Component, Input, OnInit } from '@angular/core';
import { OfferTopPromotion } from 'src/app/components/core/interfaces/component/offer/offer.interface';

@Component({
  selector: 'app-offer-top-promotion',
  templateUrl: './offer-top-promotion.component.html',
  styleUrls: ['./offer-top-promotion.component.scss']
})
export class OfferTopPromotionComponent implements OnInit {

  @Input() item!: OfferTopPromotion;

  constructor() { }

  ngOnInit(): void {
  }

}
