import { Component } from '@angular/core';
import { MetricsService } from '../metrics.service';
import { Element, DataResponse } from 'src/assets/dashboard-mock-response';
import { newLayoutResponse, backendDataResponse } from 'src/assets/dashboard-mock-response';
import { CurrencyPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';

type dataLabelSets = [string, number][];

@Component({
  selector: 'app-overall-metrics',
  templateUrl: './overall-metrics.component.html',
  styleUrls: ['./overall-metrics.component.css']
})
export class OverallMetricsComponent {
  label: string = '';
  layout: Element[] = [];
  data: DataResponse = {};
  dataLabelSets: dataLabelSets = [];

  constructor(public metricsService: MetricsService, private currencyPipe: CurrencyPipe, private percentPipe: PercentPipe) {}

  getOverallMetricsLabel(): void {
    this.metricsService.getOverallMetricsLabel().subscribe(label => this.label = label);
  }

  getOverallMetricsLayout(): void {
    this.metricsService.getOverallMetricsLayout().subscribe(layout => this.layout = layout);
  }

  getOverallMetricsData(): void {
    this.metricsService.getOverallMetricsData().subscribe(data => this.data = data);
  }

  setdataLabelSets(): void {
    const overallMetricsLayout = newLayoutResponse.layout[0].elements;
    const overallMetricsData = backendDataResponse.dataPoints;
    for (let i = 0; i < overallMetricsLayout.length; i++) {
      const dataLabelSet = []
      const metricLabel = overallMetricsLayout[i].label || 'Undefined';
      const metricKey = overallMetricsLayout[i].name || 'Undefined';
      const metricsFormat = newLayoutResponse.fieldDefinitions[metricKey].format;
      dataLabelSet.push(metricLabel);
      if (metricsFormat === 'currency') {
        dataLabelSet.push(this.currencyPipe.transform(overallMetricsData[metricKey]), 'USD');
      } else if (metricsFormat === 'percent') {
        dataLabelSet.push(this.percentPipe.transform(overallMetricsData[metricKey], '1.2-2'));
      }
      //@ts-ignore
      this.dataLabelSets.push(dataLabelSet);
    }
  }

  ngOnInit(): void {
    console.log(this.dataLabelSets);
    this.getOverallMetricsLabel();
    this.getOverallMetricsLayout();
    this.getOverallMetricsData();
    this.setdataLabelSets();
  }
}
