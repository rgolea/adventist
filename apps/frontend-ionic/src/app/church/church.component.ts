import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'adventist-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChurchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
