import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgMovieRatingComponent } from './avg-movie-rating.component';

describe('AvgMovieRatingComponent', () => {
  let component: AvgMovieRatingComponent;
  let fixture: ComponentFixture<AvgMovieRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgMovieRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgMovieRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
