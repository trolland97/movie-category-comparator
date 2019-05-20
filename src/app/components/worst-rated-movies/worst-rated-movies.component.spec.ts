import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstRatedMoviesComponent } from './worst-rated-movies.component';

describe('WorstRatedMoviesComponent', () => {
  let component: WorstRatedMoviesComponent;
  let fixture: ComponentFixture<WorstRatedMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorstRatedMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorstRatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
