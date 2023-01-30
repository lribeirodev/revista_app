import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { LoadingModule } from '../loading/loading.module';



@NgModule({
  declarations: [FooterComponent,],
  imports: [
    CommonModule,
    LoadingModule,
  ],
  exports:[
    FooterComponent,
  ]
})
export class FooterModule { }
