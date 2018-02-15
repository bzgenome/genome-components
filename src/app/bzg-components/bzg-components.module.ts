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
import {BzgDropdownDirective} from './bzg-dropdown/bzg-dropdown.directive';
import {BzgDropdownToggleDirective} from './bzg-dropdown/bzg-dropdown-toggle.directive';
import {BzgDropdownMenuDirective} from './bzg-dropdown/bzg-dropdown-menu.directive';
import {BzgButtonComponent} from './bzg-button/bzg-button.component';
import {BzgHeaderComponent} from './bzg-header/bzg-header.component';
import {BzgUserComponent} from './bzg-user/bzg-user.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BzgModalComponent,
    BzgTabSetComponent,
    BzgTabItemComponent,
    // BzgComboComponent,
    BzgStepSetComponent,
    BzgStepItemComponent,
    BzgTooltipComponent,
    BzgDropdownDirective,
    BzgDropdownToggleDirective,
    BzgDropdownMenuDirective,
    BzgButtonComponent,
    BzgHeaderComponent,
    BzgUserComponent
  ],
  declarations: [
    BzgModalComponent,
    BzgTabSetComponent,
    BzgTabItemComponent,
    // BzgComboComponent,
    BzgStepSetComponent,
    BzgStepItemComponent,
    BzgTooltipComponent,
    BzgDropdownDirective,
    BzgDropdownToggleDirective,
    BzgDropdownMenuDirective,
    BzgButtonComponent,
    BzgHeaderComponent,
    BzgUserComponent
  ],
  providers: [BzgOverlayManager],
})


export class BzgComponentsModule {
  static forRoot(config: any): BzgComponentsModule {
    return {
      ngModule: BzgComponentsModule,
      providers: [
        {provide: 'genomeConfig', useValue: config}
      ]
    };
  }
}
