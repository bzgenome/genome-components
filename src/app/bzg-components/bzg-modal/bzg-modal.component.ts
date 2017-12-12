import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'bzg-modal',
    templateUrl: './bzg-modal.component.html',
    styleUrls: ['./bzg-modal.component.scss']
})
export class BzgModalComponent {
    @Input() showModal: boolean;
    @Input() title: string;
    @Output() cancel: EventEmitter<void>;

    constructor() {
        this.cancel = new EventEmitter<void>();
    }

    onCancel() {
        this.cancel.emit();
    }
}
