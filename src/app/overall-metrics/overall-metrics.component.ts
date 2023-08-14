import { Component } from '@angular/core';
import { MetricsService } from '../metrics.service';
import { Element, DataResponse } from 'src/assets/dashboard-mock-response';

@Component({
  selector: 'app-overall-metrics',
  templateUrl: './overall-metrics.component.html',
  styleUrls: ['./overall-metrics.component.css']
})
export class OverallMetricsComponent {
  layout: Element[] = [];
  data: DataResponse = {};

  constructor(public metricsService: MetricsService) {}

  getOverallMetricsLayout(): void {
    this.metricsService.getOverallMetricsLayout().subscribe(layout => this.layout = layout);
  }

  getOverallMetricsData(): void {
    this.metricsService.getOverallMetricsData().subscribe(data => this.data = data);
  }
}
