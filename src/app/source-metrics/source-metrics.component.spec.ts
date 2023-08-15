import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceMetricsComponent } from './source-metrics.component';

describe('SourceMetricsComponent', () => {
  let component: SourceMetricsComponent;
  let fixture: ComponentFixture<SourceMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceMetricsComponent]
    });
    fixture = TestBed.createComponent(SourceMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
