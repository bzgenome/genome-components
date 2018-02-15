import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Company} from "../../common/models/company";

@Component({
    selector: 'bzg-button',
    templateUrl: './bzg-button.component.html',
    styleUrls: ['./bzg-button.component.scss']
})
export class BzgButtonComponent implements OnInit {

    @Output() onClick: EventEmitter<any>;
    @Input() iconClass?: string;
    @Input() text?: string;

    constructor(@Inject('genomeConfig') private config: any) {
        this.onClick = new EventEmitter<any>();
    }

    ngOnInit() {

    }

    public triggerClick() {
        this.onClick.emit();
    }

    public getIconClass() {
        return this.iconClass ? this.iconClass : false;
    }

    public getText() {
        return this.text ? this.text : false;
    }

    public setStyles() {
        return {
            // CSS property names
            'border': '1px solid ' + this.config["color-button-primary"],
            'background-color': this.config["color-button-primary"],
            'font-weight': 'normal',  // normal
        };
    }

}
