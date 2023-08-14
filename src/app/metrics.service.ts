import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { newLayoutResponse, backendDataResponse } from 'src/assets/dashboard-mock-response';
import { Element, DataResponse } from 'src/assets/dashboard-mock-response';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  constructor() { }
  getOverallMetricsLayout(): Observable<Element[]> {
    const overallMetricsLayout = of(newLayoutResponse.layout[0].elements);
    return overallMetricsLayout;
  }
  getOverallMetricsData(): Observable<DataResponse> {
    const overallMetricsData = of(backendDataResponse.dataPoints);
    return overallMetricsData;
  }
}
