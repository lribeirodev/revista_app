import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryComponent } from './category.component';
import { LoadingModule } from '../loading/loading.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    RouterModule,
  ],
  exports: [
    CategoryComponent,
    CategoryItemComponent,
  ]
})
export class CategoryModule { }
