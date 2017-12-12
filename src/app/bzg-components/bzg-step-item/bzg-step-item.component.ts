import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'bzg-step-item',
    templateUrl: './bzg-step-item.component.html',
    styleUrls: ['./bzg-step-item.component.scss']
})
export class BzgStepItemComponent {

    @Input() displayName: string;
    @Input() active: boolean;
    @Input() color: string;
    @Output() public click: EventEmitter<any> = new EventEmitter();
    @Output() public focus: EventEmitter<any> = new EventEmitter();
    @Output() public focusout: EventEmitter<any> = new EventEmitter();
    @Output() public blur: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.active = false;
    }

    onClick($event) {
        this.click.emit($event);
    }

    onFocus($event) {
        this.focus.emit($event);
    }

    onFocusOut($event) {
        this.focusout.emit($event);
    }

    onBlur($event) {
        this.blur.emit($event);
    }
}
