import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { News } from '@adventist/interfaces';

@Component({
  selector: 'adventist-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public newsList$ = new ReplaySubject<News[]>(1);

  constructor(private readonly afs: AngularFirestore) {}

  ngOnInit(): void {
    const collection = this.afs.collection<News>('news', (ref) =>
      ref.where('date', '>', new Date()).orderBy('date', 'asc')
    );

    collection
      .valueChanges({ idField: 'uid' })
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => this.newsList$.next(val));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
