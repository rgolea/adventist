import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.router';
import { RouterModule } from '@angular/router';
import { HorizontalScrollModule } from "@adventist/horizontal-scroll";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot([]),
    HorizontalScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
