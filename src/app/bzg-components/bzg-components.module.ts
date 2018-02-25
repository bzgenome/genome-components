import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {BzgTooltipComponent} from './bzg-tooltip/bzg-tooltip.component';
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
import {BzgIconComponent} from './bzg-icon/bzg-icon.component';
import {BzgButtonSecondaryComponent} from "./bzg-button-secondary/bzg-button-secondary.component";
import {BzgButtonPrimaryComponent} from "./bzg-button-primary/bzg-button-primary.component";
import {BzgLoadingComponent} from './bzg-loading/bzg-loading.component';
import {BzgInlineEditorComponent} from "./bzg-inline-editor/bzg-inline-editor.component";
import { BzgUserAvatarComponent } from './bzg-user-avatar/bzg-user-avatar.component';
import { BzgBounceComponent } from './bzg-bounce/bzg-bounce.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BzgModalComponent,
    BzgTabSetComponent,
    BzgTabItemComponent,
    BzgComboComponent,
    BzgStepSetComponent,
    BzgStepItemComponent,
    // BzgTooltipComponent,
    BzgDropdownDirective,
    BzgDropdownToggleDirective,
    BzgDropdownMenuDirective,
    BzgButtonComponent,
    BzgButtonPrimaryComponent,
    BzgButtonSecondaryComponent,
    BzgHeaderComponent,
    BzgUserComponent,
    BzgIconComponent,
    BzgLoadingComponent,
    BzgInlineEditorComponent,
    BzgUserAvatarComponent,
    BzgBounceComponent
  ],
  declarations: [
    BzgModalComponent,
    BzgTabSetComponent,
    BzgTabItemComponent,
    BzgComboComponent,
    BzgStepSetComponent,
    BzgStepItemComponent,
    // BzgTooltipComponent,
    BzgDropdownDirective,
    BzgDropdownToggleDirective,
    BzgDropdownMenuDirective,
    BzgButtonComponent,
    BzgButtonPrimaryComponent,
    BzgButtonSecondaryComponent,
    BzgHeaderComponent,
    BzgUserComponent,
    BzgIconComponent,
    BzgLoadingComponent,
    BzgInlineEditorComponent,
    BzgUserAvatarComponent,
    BzgBounceComponent
  ],
  providers: [BzgOverlayManager],
})


export class BzgComponentsModule {
  static forRoot(config?: any): ModuleWithProviders {
    const genomeConfig = config || {};
    return {
      ngModule: BzgComponentsModule,
      providers: [
        {provide: 'genomeConfig', useValue: genomeConfig}
      ]
    };
  }
}
