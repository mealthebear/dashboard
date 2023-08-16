import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallMetricsComponent } from './overall-metrics.component';

describe('OverallMetricsComponent', () => {
  let component: OverallMetricsComponent;
  let fixture: ComponentFixture<OverallMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverallMetricsComponent],
    });
    fixture = TestBed.createComponent(OverallMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
