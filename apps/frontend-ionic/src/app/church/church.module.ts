import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChurchRoutingModule } from './church-routing.module';
import { ChurchComponent } from './church.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ChurchComponent],
  imports: [CommonModule, ChurchRoutingModule, IonicModule],
})
export class ChurchModule {}
