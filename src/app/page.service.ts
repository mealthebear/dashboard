import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { newLayoutResponse } from 'src/assets/dashboard-mock-response';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor() {}
  getDisplayName(): Observable<string> {
    const displayName = of(newLayoutResponse.displayName);
    return displayName;
  }
}
