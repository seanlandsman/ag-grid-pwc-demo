import {Component} from '@angular/core';
import {GridOptions} from "ag-grid/main";

import 'ag-grid-enterprise/main';
import {CustomFilterComponent} from "./custom.filter.component";
import {HoverableLinkRenderer} from "./hoverable-link.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private gridOptions: GridOptions = <GridOptions>{
        enableSorting: true,
        rowSelection: 'multiple',
        suppressRowClickSelection: true,
        groupMultiAutoColumn: true,
        autoGroupColumnDef: {
            headerCheckboxSelection: true,
            cellRendererParams: {
                checkbox: true
            },
            field: 'athlete'
        },
        // Kevin, add header class to all columns
        defaultColDef: {
            headerClass: 'header-class',
            menuTabs: ['filterMenuTab'] // only show the filter
        },
        groupSelectsChildren: true,
        groupDefaultExpanded: -1, // expand everything
        enableFilter: true,
        suppressMenuHide: true, // always show the menu
        // Kevin, you can ignore everything below this - just test data
        onGridReady: (params) => {
            var httpRequest = new XMLHttpRequest();
            httpRequest.open('GET', 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json');
            httpRequest.send();
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                    var httpResult = JSON.parse(httpRequest.responseText);
                    params.api.setRowData(httpResult);
                }
            };
        }

    };
    public rowData: any[];
    private columnDefs: any[];

    constructor() {
        this.columnDefs = [
            {headerName: "Country", field: "country", width: 250, rowGroup: true, hide: true},
            {headerName: "Year", field: "year", width: 120, filterFramework: CustomFilterComponent},
            {headerName: "Sport", field: "sport", width: 110},
            {headerName: "Athlete", field: "athlete", width: 200, cellRendererFramework: HoverableLinkRenderer},
            {headerName: "Gold", field: "gold", width: 100},
            {headerName: "Silver", field: "silver", width: 100},
            {headerName: "Bronze", field: "bronze", width: 100},
            {headerName: "Total", field: "total", width: 100},
            {headerName: "Age", field: "age", width: 90},
            {headerName: "Date", field: "date", width: 110}
        ];

        this.rowData = [
            {make: "Toyota", model: "Celica", price: 35000, madeOn: new Date(2006, 10, 25)},
            {make: "Ford", model: "Mondeo", price: 32000, madeOn: new Date(2016, 2, 13)},
            {make: "Porsche", model: "Boxter", price: 72000, madeOn: new Date(2010, 7, 10)}
        ]
    }
}
