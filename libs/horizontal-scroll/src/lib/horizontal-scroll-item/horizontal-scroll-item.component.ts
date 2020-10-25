import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'adventist-horizontal-scroll-item',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-block;
        padding-right: var(--horizontal-scroll-item-padding, 1rem);
        width: auto;
        margin: 0;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalScrollItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
