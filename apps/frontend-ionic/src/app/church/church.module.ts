import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChurchRoutingModule } from './church-routing.module';
import { ChurchComponent } from './church.component';
import { IonicModule } from '@ionic/angular';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [ChurchComponent],
  imports: [CommonModule, LeafletModule, ChurchRoutingModule, IonicModule],
})
export class ChurchModule {}
