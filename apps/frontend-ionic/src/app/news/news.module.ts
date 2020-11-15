import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    IonicModule,
    AngularFireModule
  ]
})
export class NewsModule { }
