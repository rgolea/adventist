import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { News } from '@adventist/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'adventist-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public news$ = new ReplaySubject<News>(1);

  constructor(
    private readonly afs: AngularFirestore,
    private readonly route: ActivatedRoute,
    private readonly navController: NavController
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const collection = this.afs.collection('news');
    collection
      .doc<News>(id)
      .valueChanges()
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => this.news$.next(val));
  }

  goBack(): void {
    this.navController.back();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
