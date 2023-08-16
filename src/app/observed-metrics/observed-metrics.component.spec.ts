import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservedMetricsComponent } from './observed-metrics.component';

describe('ObservedMetricsComponent', () => {
  let component: ObservedMetricsComponent;
  let fixture: ComponentFixture<ObservedMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservedMetricsComponent],
    });
    fixture = TestBed.createComponent(ObservedMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
