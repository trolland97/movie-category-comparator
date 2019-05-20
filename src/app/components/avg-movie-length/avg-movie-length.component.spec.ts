import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgMovieLengthComponent } from './avg-movie-length.component';

describe('AvgMovieLengthComponent', () => {
  let component: AvgMovieLengthComponent;
  let fixture: ComponentFixture<AvgMovieLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgMovieLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgMovieLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
