import { Component } from '@angular/core';
import { MetricsService } from '../metrics.service';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Element, DataResponse } from 'src/assets/dashboard-mock-response';
import { newLayoutResponse, backendDataResponse } from 'src/assets/dashboard-mock-response';

type dataLabelSets = [string, number][];

@Component({
  selector: 'app-observed-metrics',
  templateUrl: './observed-metrics.component.html',
  styleUrls: ['./observed-metrics.component.css']
})
export class ObservedMetricsComponent {
  label: string = '';
  layout: Element[] = [];
  data: DataResponse = {};
  dataLabelSets: dataLabelSets = [];

  constructor(public metricsService: MetricsService, private currencyPipe: CurrencyPipe, private percentPipe: PercentPipe) {}

  getObservedMetricsLabel(): void {
    this.metricsService.getObservedMetricsLabel().subscribe(label => this.label = label);
  }

  getObservedMetricsLayout(): void {
    this.metricsService.getObservedMetricsLayout().subscribe(layout => this.layout = layout);
  }

  getOverallMetricsData(): void {
    this.metricsService.getOverallMetricsData().subscribe(data => this.data = data);
  }

  setdataLabelSets(): void {
    const observedMetricsLayout = newLayoutResponse.layout[1].elements;
    const metricsData = backendDataResponse.dataPoints;
    for (let i = 0; i < observedMetricsLayout.length; i++) {
      const dataLabelSet = []
      const metricLabel = observedMetricsLayout[i].label || 'Undefined';
      const metricKey = observedMetricsLayout[i].name || 'Undefined';
      const metricsFormat = newLayoutResponse.fieldDefinitions[metricKey].format;
      dataLabelSet.push(metricLabel);
      if (metricsFormat === 'currency') {
        dataLabelSet.push(this.currencyPipe.transform(metricsData[metricKey]), 'USD');
      } else if (metricsFormat === 'percent') {
        dataLabelSet.push(this.percentPipe.transform(metricsData[metricKey], '1.2-2'));
      } else {
        dataLabelSet.push(metricsData[metricKey]);
      }
      //@ts-ignore
      this.dataLabelSets.push(dataLabelSet);
    }
  }

  ngOnInit(): void {
    this.getObservedMetricsLabel();
    this.getObservedMetricsLayout();
    this.getOverallMetricsData();
    this.setdataLabelSets();
  }
}
