import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticComparisonsComponent } from './static-comparisons.component';

describe('StaticComparisonsComponent', () => {
  let component: StaticComparisonsComponent;
  let fixture: ComponentFixture<StaticComparisonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticComparisonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticComparisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
