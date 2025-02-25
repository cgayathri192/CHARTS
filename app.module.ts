import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { BarComponent } from './bar/bar.component';



@NgModule({
  declarations: [
    AppComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
