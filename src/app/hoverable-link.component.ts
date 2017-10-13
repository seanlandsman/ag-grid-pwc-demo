import {Component} from "@angular/core";

import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'hoverable-cell',
    template: `
        <div (mouseenter) ="mouseEnter() "  (mouseleave) ="mouseLeave()">
            <span [ngSwitch]="overElement">
                <span *ngSwitchCase="true"><a href="some destingation from params">{{valueToDisplay}}</a></span>
                <span *ngSwitchCase="false">{{valueToDisplay}}</span>
            </span>            
        </div>`
})
export class HoverableLinkRenderer implements ICellRendererAngularComp {
    private params: any;
    private valueToDisplay: any;
    private overElement = false;

    // called on init
    agInit(params: any): void {
        this.params = params;
        this.valueToDisplay = this.params.value;
    }

    mouseEnter() {
        this.overElement = true;
    }

    mouseLeave() {
        this.overElement = false;
    }

    // called when the cell is refreshed
    refresh(params: any): boolean {
        this.params = params;
        return true;
    }
}
