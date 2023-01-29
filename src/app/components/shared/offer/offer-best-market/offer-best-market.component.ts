import { Component, Input, OnInit } from '@angular/core';
import { OfferBestMarket } from 'src/app/components/core/interfaces/component/offer/offer.interface';

@Component({
  selector: 'app-offer-best-market',
  templateUrl: './offer-best-market.component.html',
  styleUrls: ['./offer-best-market.component.scss']
})
export class OfferBestMarketComponent implements OnInit {

  @Input() item!: OfferBestMarket;

  constructor() { }

  ngOnInit(): void {
  }

}
