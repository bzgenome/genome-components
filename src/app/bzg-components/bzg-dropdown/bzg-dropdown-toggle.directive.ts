import {Directive, Host, HostListener} from '@angular/core';

import {BzgDropdownDirective} from './bzg-dropdown.directive';

@Directive({
    selector: '[bzgDropdownToggle]',
    exportAs: 'bzgDropdownToggle',
})
export class BzgDropdownToggleDirective {

    constructor(@Host() public dropdown: BzgDropdownDirective) {
    }

    @HostListener('click')
    toggle() {
        this.dropdown.toggle();
    }
}
