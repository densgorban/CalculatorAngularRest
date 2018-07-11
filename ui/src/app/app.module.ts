import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppCalculator } from './app.calculator';

@NgModule({
  declarations: [
    AppComponent,
    AppCalculator
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppCalculator]
})
export class AppModule { }
