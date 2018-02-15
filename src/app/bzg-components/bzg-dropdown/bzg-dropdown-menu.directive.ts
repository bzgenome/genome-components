import {Directive, ElementRef, Host, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import {TOGGLE_STATUS} from './bzg-toggle-status';
import {BzgDropdownDirective} from './bzg-dropdown.directive';

@Directive({
    selector: '[bzgDropdownMenu]',
    exportAs: 'bzgDropdownMenu',
})
export class BzgDropdownMenuDirective implements OnInit, OnDestroy {
    ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(@Host() public dropdown: BzgDropdownDirective,
                private elementRef: ElementRef,) {
    }

    ngOnInit() {
        this.dropdown.statusChange()
            .takeUntil(this.ngUnsubscribe)
            .subscribe((newStatus: TOGGLE_STATUS) => {
                if (newStatus === TOGGLE_STATUS.OPEN) {
                    // Listen to click events to realise when to close the dropdown.
                    document.addEventListener('click', this.onDocumentClick.bind(this), true);
                } else {
                    document.removeEventListener('click', this.onDocumentClick, true);
                }
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();

        document.removeEventListener('click', this.onDocumentClick, true);
    }

    onDocumentClick(event: MouseEvent) {
        const target: EventTarget = event.target;
        if (target instanceof HTMLElement && target.hasAttribute('bzgDropdownToggle')) {
            // Ignore dropdownToggle element, even if it's outside the menu.
            return;
        }
        const isInsideClick = this.elementRef.nativeElement.contains(target);
        if (!isInsideClick || target instanceof HTMLElement && target.hasAttribute('href')) {
            this.dropdown.close();
        } else {
            this.dropdown.open();
        }
    }
}
