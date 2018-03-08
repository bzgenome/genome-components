import {
    AfterContentInit,
    Component,
    ContentChildren,
    Input,
    OnInit,
    QueryList
} from '@angular/core';
import {BzgStepItemComponent} from "../bzg-step-item/bzg-step-item.component";

@Component({
    selector: 'bzg-step-set',
    templateUrl: './bzg-step-set.component.html',
    styleUrls: ['./bzg-step-set.component.scss']
})
export class BzgStepSetComponent implements AfterContentInit {

    @ContentChildren(BzgStepItemComponent) steps: QueryList<BzgStepItemComponent>;

    @Input() type: string = "primary";

    public currentStep: string;
    private _itemSelected: number;

    @Input() set itemSelected(value: number) {
        this._itemSelected = value;
        this.selectStepById(this._itemSelected);
    }

    get itemSelected(): number {
        return this._itemSelected;

    }
    ngAfterContentInit() {
        const activeSteps = this.steps.filter((step) => step.active);
        if (activeSteps.length === 0) {
            this.selectStep(this.steps.first);
        }
      this.selectStepById(this._itemSelected);

    }

    selectStepById(idTab) {
        if (this.steps) {
            let selectedStep = this.steps.toArray()[idTab];
            this.selectStep(selectedStep);
        }
    }

    selectStep(step: BzgStepItemComponent) {
        if (step) {
            this.steps.toArray().forEach(step => step.active = false);
            step.active = true;
            step.onClick(null);
            this.currentStep = step.displayName;
        }
    }
}
