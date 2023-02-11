import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HeaderModule } from '../shared/header/header.module';
import { SearchModule } from '../shared/search/search.module';
import { CategoryModule } from '../shared/category/category.module';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    HeaderModule,
    SearchModule,
    CategoryModule,
    FooterModule,
  ]
})
export class PagesModule { }
