import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { newLayoutResponse, backendDataResponse } from 'src/assets/dashboard-mock-response';
import { Element, DataResponse } from 'src/assets/dashboard-mock-response';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  constructor() { }
  getOverallMetricsLabel(): Observable<string> {
    const overallMetricsLabel = of(newLayoutResponse.layout[0].label);
    return overallMetricsLabel;
  }
  getOverallMetricsLayout(): Observable<Element[]> {
    const overallMetricsLayout = of(newLayoutResponse.layout[0].elements);
    return overallMetricsLayout;
  }
  getOverallMetricsData(): Observable<DataResponse> {
    const overallMetricsData = of(backendDataResponse.dataPoints);
    return overallMetricsData;
  }
  getObservedMetricsLabel(): Observable<string> {
    const observedMetricsLabel = of(newLayoutResponse.layout[1].label);
    return observedMetricsLabel;
  }
  getObservedMetricsLayout(): Observable<Element[]> {
    const observedMetricsLayout = of(newLayoutResponse.layout[1].elements);
    return observedMetricsLayout;
  }

  getSourceMetricsLabel(): Observable<string> {
    const sourceMetricsLabel = of(newLayoutResponse.layout[2].label);
    return sourceMetricsLabel;
  }
  getSourceMetricsLayout(): Observable<Element[]> {
    const sourceMetricsLayout = of(newLayoutResponse.layout[2].elements);
    return sourceMetricsLayout;
  }
}
