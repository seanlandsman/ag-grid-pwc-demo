import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// material components
import {MdCardModule, MdCheckboxModule, MdDatepickerModule, MdIconModule, MdInputModule} from '@angular/material';

import {AgGridModule} from "ag-grid-angular/main";
import {CustomFilterComponent} from "./custom.filter.component";
import {HoverableLinkRenderer} from "./hoverable-link.component";

@NgModule({
    declarations: [
        AppComponent,
        CustomFilterComponent,
        HoverableLinkRenderer
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
            CustomFilterComponent,
            HoverableLinkRenderer
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
