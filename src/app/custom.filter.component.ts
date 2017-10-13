import {Component, ViewChild, ViewContainerRef} from "@angular/core";

import {IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams, RowNode} from "ag-grid/main";
import {IFilterAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'filter-cell',
    template: `
        <div >
            <div>
                <div>
                    Show items with value that
                    <select class="ag-filter-select" id="filterType" [(ngModel)]="filterType">
                        <option value="equals">Equals</option>
                        <option value="notEqual">Not equal</option>
                        <option value="lessThan">Less than</option>
                        <option value="lessThanOrEqual">Less than or equals</option>
                        <option value="greaterThan">Greater than</option>
                        <option value="greaterThanOrEqual">Greater than or equals</option>
                        <option value="inRange">In range</option>
                    </select>
                </div>
                <div class="ag-filter-body">
                    <div>
                        <input #input class="ag-filter-filter" id="filterText" type="text" placeholder="Filter..." [(ngModel)]="filterValue">
                    </div>
                </div>
                <div class="ag-filter-apply-panel" id="applyPanel">
                    <button type="button" id="clearButton" (click)="clearFilter()">Clear Filter</button>
                    <button type="button" id="applyButton" (click)="applyFilter()">Apply Filter</button>
                </div>
            </div>
        </div>
    `
})
export class CustomFilterComponent implements IFilterAngularComp {
    private params: IFilterParams;

    private filterType:string = 'equals';
    private filterValue:string = null;

    private valueGetter: (rowNode: RowNode) => any;
    public text: string = '';

    @ViewChild('input', {read: ViewContainerRef}) public input;

    agInit(params: IFilterParams): void {
        this.params = params;
        this.valueGetter = params.valueGetter;
    }

    isFilterActive(): boolean {
        return this.filterValue !== null && this.filterValue !== undefined;
    }

    doesFilterPass(params: IDoesFilterPassParams): boolean {
        // only implementing here - in a real filter you'd check filterType etc
        // assuming number for this test - tweak this logic according to your input & data
        return this.valueGetter(params.node) === Number(this.filterValue);
    }

    getModel(): any {
        return {value: this.text};
    }

    setModel(model: any): void {
        this.text = model ? model.value : '';
    }

    afterGuiAttached(params: IAfterGuiAttachedParams): void {
        this.input.element.nativeElement.focus();
    }


    applyFilter() {
        this.params.filterChangedCallback();
    }
    clearFilter() {
        this.filterType = 'equals';
        this.filterValue = null;
    }
}
