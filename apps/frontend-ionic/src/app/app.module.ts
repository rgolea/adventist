import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.router';
import { RouterModule } from '@angular/router';
import { HorizontalScrollModule } from "@adventist/horizontal-scroll";
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md"
    }),
    AppRoutingModule,
    RouterModule.forRoot([]),
    HorizontalScrollModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAoCTUjpyaDjQZxZi3npE1-ijhmFC8o9rI",
      authDomain: "newsletter-3cc38.firebaseapp.com",
      databaseURL: "https://newsletter-3cc38.firebaseio.com",
      projectId: "newsletter-3cc38",
      storageBucket: "newsletter-3cc38.appspot.com",
      messagingSenderId: "797249201952",
      appId: "1:797249201952:web:1f6f88b8d368ead54f1945",
      measurementId: "G-4G9E8D81Y9"
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
