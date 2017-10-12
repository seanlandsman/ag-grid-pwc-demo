import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// material components
import {MdIconModule, MdCheckboxModule, MdInputModule, MdCardModule,  MdDatepickerModule} from '@angular/material';

import {AgGridModule} from "ag-grid-angular/main";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdCardModule,
    MdDatepickerModule,
    AgGridModule.withComponents([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
