import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortestMoviesComponent } from './shortest-movies.component';

describe('ShortestMoviesComponent', () => {
  let component: ShortestMoviesComponent;
  let fixture: ComponentFixture<ShortestMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortestMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
