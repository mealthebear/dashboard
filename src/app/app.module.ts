import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverallMetricsComponent } from './overall-metrics/overall-metrics.component';
import { CurrencyPipe, PercentPipe, DecimalPipe } from '@angular/common';
import { MetricsOverviewComponent } from './metrics-overview/metrics-overview.component';
import { ObservedMetricsComponent } from './observed-metrics/observed-metrics.component';
import { SourceMetricsComponent } from './source-metrics/source-metrics.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverallMetricsComponent,
    MetricsOverviewComponent,
    ObservedMetricsComponent,
    SourceMetricsComponent,
    SummaryComponent,
  ],
  imports: [BrowserModule],
  providers: [CurrencyPipe, PercentPipe, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
