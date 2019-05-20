import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRatedMoviesComponent } from './best-rated-movies.component';

describe('BestRatedMoviesComponent', () => {
  let component: BestRatedMoviesComponent;
  let fixture: ComponentFixture<BestRatedMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestRatedMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
