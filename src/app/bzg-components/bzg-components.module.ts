import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BzgTooltipComponent} from './bzg-tooltip/bzg-tooltip.component';
import {BzgOverlayManager} from './bzg-tooltip/bzg-overlay-manager';
import {BzgStepSetComponent} from './bzg-step-set/bzg-step-set.component';
import {BzgStepItemComponent} from './bzg-step-item/bzg-step-item.component';
import {BzgComboComponent} from './bzg-combo/bzg-combo.component';
import {BzgTabSetComponent} from './bzg-tab-set/bzg-tab-set.component';
import {BzgModalComponent} from './bzg-modal/bzg-modal.component';
import {BzgTabItemComponent} from './bzg-tab-item/bzg-tab-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        BzgModalComponent,
        BzgTabSetComponent,
        BzgTabItemComponent,
        BzgStepSetComponent,
        BzgStepItemComponent,
        BzgTooltipComponent
       // BzgComboComponent
    ],
    declarations: [
        BzgModalComponent,
        BzgTabSetComponent,
        BzgTabItemComponent,
        BzgStepSetComponent,
        BzgStepItemComponent,
        BzgTooltipComponent
        // BzgComboComponent
    ],
    providers: [BzgOverlayManager],
})


export class BzgComponentsModule {
}
