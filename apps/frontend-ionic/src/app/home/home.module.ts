import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HorizontalScrollModule } from '@adventist/horizontal-scroll';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';

@NgModule({
  declarations: [HomeComponent, NewsListComponent, NewsListItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    HomeRoutingModule,
    HorizontalScrollModule,
  ],
  exports: [],
  providers: [],
})
export class HomeModule {}
