import { Component } from '@angular/core';
import { MetricsService } from '../metrics.service';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Element, DataResponse } from 'src/assets/dashboard-mock-response';
import {
  newLayoutResponse,
  backendDataResponse,
} from 'src/assets/dashboard-mock-response';

type dataLabelSets = [string, number][];

@Component({
  selector: 'app-source-metrics',
  templateUrl: './source-metrics.component.html',
  styleUrls: ['./source-metrics.component.css'],
})
export class SourceMetricsComponent {
  label: string = '';
  layout: Element[] = [];
  data: DataResponse = {};
  dataLabelSets: dataLabelSets = [];

  constructor(
    public metricsService: MetricsService,
    private currencyPipe: CurrencyPipe,
    private percentPipe: PercentPipe
  ) {}

  getSourceMetricsLabel(): void {
    this.metricsService
      .getSourceMetricsLabel()
      .subscribe((label) => (this.label = label));
  }

  getSourceMetricsLayout(): void {
    this.metricsService
      .getSourceMetricsLayout()
      .subscribe((layout) => (this.layout = layout));
  }

  getOverallMetricsData(): void {
    this.metricsService
      .getOverallMetricsData()
      .subscribe((data) => (this.data = data));
  }

  setdataLabelSets(): void {
    const sourceMetricsLayout = newLayoutResponse.layout[2].elements;
    const metricsData = backendDataResponse.dataPoints;
    for (let i = 0; i < sourceMetricsLayout.length; i++) {
      const dataLabelSet = [];
      const metricLabel = sourceMetricsLayout[i].label || 'Undefined';
      const metricKey = sourceMetricsLayout[i].name || 'Undefined';
      const metricsFormat =
        newLayoutResponse.fieldDefinitions[metricKey].format;
      dataLabelSet.push(metricLabel);
      if (metricsFormat === 'currency') {
        dataLabelSet.push(
          this.currencyPipe.transform(metricsData[metricKey]),
          'USD'
        );
      } else if (metricsFormat === 'percent') {
        dataLabelSet.push(
          this.percentPipe.transform(metricsData[metricKey], '1.2-2')
        );
      } else {
        dataLabelSet.push(metricsData[metricKey]);
      }
      //@ts-ignore
      this.dataLabelSets.push(dataLabelSet);
    }
  }

  ngOnInit(): void {
    this.getSourceMetricsLabel();
    this.getSourceMetricsLayout();
    this.getOverallMetricsData();
    this.setdataLabelSets();
  }
}
