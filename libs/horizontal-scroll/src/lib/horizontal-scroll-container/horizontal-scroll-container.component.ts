import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'adventist-horizontal-scroll-container',
  template: `
    <div class="__horizontal-scroll-container__">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        overflow-x: scroll;
        overflow-y: hidden;
      }

      .__horizontal-scroll-container__ {
        height: 100%;
        white-space: nowrap;
        padding-bottom: 1rem;
      }

      :host::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalScrollContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
