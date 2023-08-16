import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  newLayoutResponse,
  backendDataResponse,
  DataResponse,
  DatasetFields,
} from 'src/assets/dashboard-mock-response';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  constructor() {}

  getSummaryData(): Observable<DataResponse[]> {
    const summaryDataset = of(backendDataResponse.dataSets[0].data);
    return summaryDataset;
  }

  getSummaryLayout(): Observable<DatasetFields[] | undefined> {
    const summaryLayout = of(newLayoutResponse.layout[3].elements[0].fields);
    return summaryLayout;
  }
}
