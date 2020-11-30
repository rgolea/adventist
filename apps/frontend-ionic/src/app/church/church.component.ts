import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Church } from '@adventist/interfaces';
import { firestore } from 'firebase/app';
import { takeUntil, tap } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';
import { latLng, Map, MapOptions, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'adventist-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChurchComponent implements OnInit, OnDestroy {
  public church$ = new ReplaySubject<Church>(1);
  private destroy$ = new Subject();

  options: MapOptions = {};

  constructor(
    private readonly afs: AngularFirestore,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const collection = this.afs.collection('churches');
    collection
      .doc<Church>(id)
      .valueChanges()
      .pipe(
        takeUntil(this.destroy$),
        tap((val: Church) => this.updateMap(val.location))
      )
      .subscribe((val: Church) => this.church$.next(val));
  }

  updateMap(location?: firestore.GeoPoint) {
    if (!location) {
      return;
    }

    const mark = marker([location?.latitude, location.longitude], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png',
      }),
    });

    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
        mark,
      ],
      zoom: 18,
      center: latLng(location?.latitude, location.longitude),
    };
  }

  onMapReady(map: Map) {
    // Workaround agregado porque no dibujaba todas las tiles al iniciar
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
