import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BzgModalComponent} from './bzg-modal/bzg-modal.component';
import {BzgTabSetComponent} from './bzg-tab-set/bzg-tab-set.component';
import {BzgTabItemComponent} from './bzg-tab-item/bzg-tab-item.component';
import {BzgComboComponent} from './bzg-combo/bzg-combo.component';
import {FormsModule} from "@angular/forms";
import {BzgStepSetComponent} from './bzg-step-set/bzg-step-set.component';
import {BzgStepItemComponent} from './bzg-step-item/bzg-step-item.component';
import {BzgTooltipComponent} from "./bzg-tooltip/bzg-tooltip.component";
import {BzgOverlayManager} from "./bzg-tooltip/bzg-overlay-manager";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        BzgModalComponent,
        BzgTabSetComponent,
        BzgTabItemComponent,
        BzgComboComponent,
        BzgStepSetComponent,
        BzgStepItemComponent,
        BzgTooltipComponent
    ],
    declarations: [
        BzgModalComponent,
        BzgTabSetComponent,
        BzgTabItemComponent,
        BzgComboComponent,
        BzgStepSetComponent,
        BzgStepItemComponent,
        BzgTooltipComponent
    ],
    providers: [BzgOverlayManager],
})


export class BzgComponentsModule {
}
