import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { PagesService } from '../../core/services/pages.service';
import { OfferModule } from '../../shared/offer/offer.module';


@NgModule({
  declarations: [HomeComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OfferModule,
  ],
  providers: [
    PagesService,
    RouterModule,
  ]
})
export class HomeModule { }
