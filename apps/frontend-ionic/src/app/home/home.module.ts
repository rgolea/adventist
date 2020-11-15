import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HorizontalScrollModule } from "@adventist/horizontal-scroll";

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ CommonModule, IonicModule, HomeRoutingModule, HorizontalScrollModule ],
  exports: [],
  providers: [],
})
export class HomeModule {}
