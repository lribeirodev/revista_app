import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferType } from '../../core/enums/components/offer/offer.enum';
import { Offer, OfferBestMarket, OfferTopPromotion } from '../../core/interfaces/component/offer/offer.interface';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input() contentName: string = '';
  loading : boolean = true;
  offer!: Offer;
  items: any;

  constructor(private content: ContentService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.content.requestData<Offer>(this.route, this.contentName)
    .then(data => {
      this.offer = data;
      this.items = data.items;
    })
    .finally(() => {
      this.loading = false;
    })
  }


  isTopPromotion(): boolean {
    return this.contentName === OfferType.TOP_PROMOTIONS;
  };

  isBestMarket(): boolean {
    return this.contentName === OfferType.BEST_MARKETS;
  }

}
