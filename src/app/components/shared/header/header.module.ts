import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ContentService } from '../../core/services/content.service';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    LoadingModule,
  ],
  exports:[
    HeaderComponent,
  ],
  providers: [
    ContentService,
   RouterModule,
  ]
})
export class HeaderModule { }
