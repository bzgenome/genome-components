import {
    AfterContentInit,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    QueryList
} from '@angular/core';
import {BzgTabItemComponent} from "../bzg-tab-item/bzg-tab-item.component";

@Component({
    selector: 'bzg-tab-set',
    templateUrl: './bzg-tab-set.component.html',
    styleUrls: ['./bzg-tab-set.component.scss']
})
export class BzgTabSetComponent implements AfterContentInit {

    @ContentChildren(BzgTabItemComponent) tabs: QueryList<BzgTabItemComponent>;

    @Input() type: string = "primary";
    @Output() public onSelectTab: EventEmitter<BzgTabItemComponent> = new EventEmitter();

    private _itemSelected: number;

    @Input() set itemSelected(value: number) {
        this._itemSelected = value;
        this.selectTabById(this._itemSelected);
    }

    get itemSelected(): number {
        return this._itemSelected;

    }

    ngAfterContentInit() {

        let activeTabs = this.tabs.filter((tab) => tab.active);
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }

    }

    selectTabById(idTab) {
        if (this.tabs) {
            let selectedTab = this.tabs.toArray()[idTab];
            this.selectTab(selectedTab);
        }
    }

    selectTab(tab: BzgTabItemComponent) {
        if (tab) {
            this.tabs.toArray().forEach(tab => tab.active = false);
            tab.active = true;
            tab.onClick(null);
            this.onSelectTab.emit(tab);
        }
    }

}
