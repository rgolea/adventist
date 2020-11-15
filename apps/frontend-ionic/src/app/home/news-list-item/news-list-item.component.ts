import { News } from '@adventist/interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'adventist-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListItemComponent implements OnInit {
  @Input() news: News;
  @Input() thumbnailStart: boolean;

  constructor() {}

  ngOnInit(): void {}
}
