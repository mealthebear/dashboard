import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverallMetricsComponent } from './overall-metrics/overall-metrics.component';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { MetricsOverviewComponent } from './metrics-overview/metrics-overview.component';
import { ObservedMetricsComponent } from './observed-metrics/observed-metrics.component';
import { SourceMetricsComponent } from './source-metrics/source-metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverallMetricsComponent,
    MetricsOverviewComponent,
    ObservedMetricsComponent,
    SourceMetricsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CurrencyPipe, PercentPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
