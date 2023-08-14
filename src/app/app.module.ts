import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverallMetricsComponent } from './overall-metrics/overall-metrics.component';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverallMetricsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CurrencyPipe, PercentPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
