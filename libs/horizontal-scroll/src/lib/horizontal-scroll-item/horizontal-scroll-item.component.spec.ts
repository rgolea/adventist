import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalScrollItemComponent } from './horizontal-scroll-item.component';

describe('HorizontalScrollItemComponent', () => {
  let component: HorizontalScrollItemComponent;
  let fixture: ComponentFixture<HorizontalScrollItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalScrollItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalScrollItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
