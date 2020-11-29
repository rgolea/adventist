import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Church } from "@adventist/interfaces";
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'adventist-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChurchComponent implements OnInit, OnDestroy {
  public church$ = new ReplaySubject<Church>(1);
  private destroy$ = new Subject();

  constructor(
    private readonly afs: AngularFirestore,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const collection = this.afs.collection('churches');
    collection
      .doc<Church>(id)
      .valueChanges()
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => this.church$.next(val));
  }

  ngOnDestroy(){
    this.destroy$.next();
  }

}
