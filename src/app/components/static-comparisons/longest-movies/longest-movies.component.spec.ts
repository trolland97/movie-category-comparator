import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongestMoviesComponent } from './longest-movies.component';

describe('LongestMoviesComponent', () => {
  let component: LongestMoviesComponent;
  let fixture: ComponentFixture<LongestMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongestMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
