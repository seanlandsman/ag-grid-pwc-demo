import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IAfterGuiAttachedParams, ICellEditorParams } from "ag-grid/main";
import { AgEditorComponent, } from "ag-grid-angular";
import { MdInput } from "@angular/material";

@Component({
  selector: 'app-ag-grid-material-text-editor',
  templateUrl: './ag-grid-material-text-editor.component.html',
  styleUrls: ['./ag-grid-material-text-editor.component.scss']
})
export class AgGridMaterialTextEditorComponent implements OnInit, AgEditorComponent {
    params: ICellEditorParams;
    private value: string;
    @ViewChild('input', {read: MdInput}) input;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.input.focus();
    }

    isPopup(): boolean {
        return false;
    }

    isCancelBeforeStart(): boolean {
        return false;
    }

    isCancelAfterEnd(): boolean {
        return false;
    }

    focusIn(): void {
        //
    }

    focusOut(): void {
        // 
    }

    agInit(params: ICellEditorParams): void {
        this.params = params;
        this.value = params.value;
    }

    getValue(): string {
        return this.value;
    }

    onBlur(): void {
        this.params.stopEditing();
    }

}
