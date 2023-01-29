import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { OfferTopPromotionComponent } from './offer-top-promotion/offer-top-promotion.component';
import { LoadingModule } from '../loading/loading.module';
import { OfferBestMarketComponent } from './offer-best-market/offer-best-market.component';

@NgModule({
  declarations: [OfferComponent, OfferTopPromotionComponent, OfferBestMarketComponent],
  imports: [
    CommonModule,
    LoadingModule,
  ],
  exports: [
    OfferComponent, OfferTopPromotionComponent, OfferBestMarketComponent
  ]
})
export class OfferModule { }
