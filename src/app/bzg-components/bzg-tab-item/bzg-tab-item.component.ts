import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
@Component({
    selector: 'bzg-tab-item',
    templateUrl: './bzg-tab-item.component.html',
    styleUrls: ['./bzg-tab-item.component.scss']
})
export class BzgTabItemComponent {
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
        console.log('sucede');
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
