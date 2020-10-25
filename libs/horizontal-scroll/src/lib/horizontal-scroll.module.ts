import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalScrollContainerComponent } from './horizontal-scroll-container/horizontal-scroll-container.component';
import { HorizontalScrollItemComponent } from './horizontal-scroll-item/horizontal-scroll-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HorizontalScrollContainerComponent, HorizontalScrollItemComponent],
  exports: [HorizontalScrollContainerComponent, HorizontalScrollItemComponent],
})
export class HorizontalScrollModule {}
