import {Component, OnInit, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    moduleId: 'bzg-combo',
    selector: 'bzg-combo',
    templateUrl: './bzg-combo.component.html',
    styleUrls: ['./bzg-combo.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => BzgComboComponent),
        multi: true
    }]
})
export class BzgComboComponent implements ControlValueAccessor, OnInit {

    @Input()
    displayField: string;
    @Input()
    formControlName: string = '';
    @Input()
    valueField: string;
    @Input()
    remote: boolean = false;
    @Input()
    clearOnSelect: boolean = false;
    @Input()
    forceSelection: boolean = true;
    @Input()
    localFilter: boolean = false;
    @Input()
    localFilterCaseSensitive: boolean = true;
    @Input()
    typeAheadDelay: number = 500;
    @Input()
    inputClass: string = 'bzg-combo__input';
    @Input()
    inputPlaceholder: string = '';
    @Input()
    loadingIconClass: string = 'bzg-combo__icons__loader';
    @Input()
    triggerIconClass: string = 'bzg-combo__icons__trigger';
    @Input()
    dataRoot: string = '';
    @Input()
    disabledField: string = null;
    @Input()
    editable: boolean = true;
    @Input()
    noMatchesText: string = '';

    @Output()
    onQuery = new EventEmitter<string>();
    @Output()
    onSelect = new EventEmitter<string>();
    @Output()
    onCreate = new EventEmitter<string>();
    @Output()
    onBlur = new EventEmitter<any>();
    @Output()
    onInitValue = new EventEmitter<string>();

    @ViewChild('inputField') _input;

    hideList: boolean = true;
    data: any[];

    private _loading: boolean = false;
    private _listDataSubscription: Subscription;
    private _aheadTimer: number;
    private _currVal: string;
    private _marked: number = null;
    private _initialData: any[];
    private _hasFocus: boolean = false;
    private _tmpVal: any;
    private _enterCued: boolean = false;
    private _noBlur: boolean = false;

    // ControlValueAccessor props
    private propagateTouch = () => {
    };
    private propagateChange = (_: any) => {
    };

    constructor(private scrollElement: ElementRef) {
    }

    ngOnInit() {
    }

    @Input()
    set listData(value: Observable<Object[]> | Object[]) {
        if (this._listDataSubscription) {
            this._listDataSubscription.unsubscribe();
        }

        if (value instanceof Observable) {
            const listData = <Observable<Object[]>>value;
            this._listDataSubscription = listData.subscribe((data: any) => {
                // todo: make dataRoot work for all depths
                if (this.dataRoot) {
                    data = <Object[]>data[this.dataRoot];
                }
                this.data = this._initialData = data;
                this.loading = false;
                if (0 === this._tmpVal || this._tmpVal) {
                    this.writeValue(this._tmpVal);
                }
            });
        } else {
            let data = <Object[]>value;
            this.data = this._initialData = data;
            this.loading = false;

            // If the list data change, trigger a reprocessing.
            this.loadData();
        }
    }

    @Input()
    set currVal(value: string) {
        this._currVal = value;
        this._tmpVal = null;
        this.marked = null;
        this.hideList = !this._hasFocus && !this._noBlur;

        clearTimeout(this._aheadTimer);
        if (!this._currVal) {
            this.sendModelChange(null);
        }

        this._aheadTimer = setTimeout(this.loadData.bind(this), this.typeAheadDelay);
    }

    get currVal(): string {
        return this._currVal;
    }

    set marked(value: number) {
        if (null === value) {
            this._marked = value;
        } else if (this.data && 0 <= value && this.data.length >= value - 1) {
            this._marked = value;
            // use private var to prevent query trigger
            this._currVal = this.getDisplayValue(this.data[this._marked]);
        }
        this.scrollToMarkedElement();
    }

    private scrollToMarkedElement() {
        let el = this.scrollElement.nativeElement.querySelector(`.bzg-combo__list__item:nth-child(${this.marked + 1})`);

        let alignToTop = false;
        el.scrollIntoView(alignToTop);
    }

    get marked(): number {
        return this._marked;
    }

    set loading(loading: boolean) {
        this._loading = loading;
        if (!loading && this._enterCued) {
            this._enterCued = false;
            this.handleEnter();
        }
    }

    get loading(): boolean {
        return this._loading;
    }

    onKeyDown(event: KeyboardEvent) {
        const code = event.which || event.keyCode;
        switch (code) {
            case 13:
                event.preventDefault();
                this.handleEnter();
                break;
            case 38:
                event.preventDefault();
                this.handleUp();
                break;
            case 40:
                event.preventDefault();
                this.handleDown();
                break;
            default:
                if (!this.editable) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    return false;
                }
                break;
        }
    }

    onItemClick(index: number, item: Object) {
        if (this.isDisabled(item)) {
            return;
        }
        this._noBlur = false;
        this.marked = index;

        this.onSelect.emit(this.data[this.marked]);
        this.sendModelChange(this.data[this.marked]);

        if (this.clearOnSelect) {
            this.clear();
        } else {
            this.hideList = true;
        }
        if (!this.remote && !this.localFilter) {
            this.data = this._initialData;
        }
    }

    onFieldBlur(event: FocusEvent) {
        this._hasFocus = false;
        if (this._noBlur) {
            return;
        }

        this.onBlur.emit(event);
        // timeout for hide to catch click event on list :-(
        setTimeout(() => {
            this.handleEnter();
        }, 200);

        this.propagateTouch();
    }

    onFieldFocus() {
        this._hasFocus = true;
        this.hideList = false;
        if (!this.editable) {
            this.clear();
        }
        this.loadData();
    }

    onMouseEnterList() {
        this._noBlur = true;
    }

    onMouseLeaveList() {
        this._noBlur = false;
    }

    isMarked(value: Object): boolean {
        if (null === this.marked) {
            return false;
        }
        return this.data[this.marked] === value;
    }

    isDisabled(value: Object): boolean {
        if (!this.disabledField) {
            return false;
        }

        return !!value[this.disabledField];
    }

    private handleEnter() {
        if (!this.loading) {
            // try to determine marked (look if item is in list)
            if (!this.marked) {
                for (let i = 0; i < this.data.length; i++) {
                    if (this.currVal === this.getDisplayValue(this.data[i])) {
                        this.marked = i;
                        break;
                    }
                }
            }
            if (null === this.marked) {
                if (this.forceSelection) {
                    this.onSelect.emit(null);
                    this.sendModelChange(null);
                    this.clear();
                } else {
                    this.onCreate.emit(this.currVal);
                    //this may causes error
                    this.sendModelChange(this.currVal);
                }
            } else {
                let item = this.data[this.marked];
                if (this.isDisabled(item)) {
                    return;
                }
                this.onSelect.emit(this.data[this.marked]);
                this.sendModelChange(this.data[this.marked]);
            }

            if (this.clearOnSelect) {
                this.clear();
            } else {
                this.hideList = true;
            }
            if (!this.remote && !this.localFilter) {
                this.data = this._initialData;
            }
        }
        else {
            this._enterCued = true;
        }
    }

    private handleUp() {
        if (null !== this.marked && this.marked > 0) {
            this.marked--;
        } else {
            this.marked = 0;
        }
    }

    private handleDown() {
        if (null !== this.marked && this.marked >= 0) {
            if (this.marked < this.data.length - 1) {
                this.marked++;
            }
        } else {
            this.marked = 0;
        }
    }

    private clear() {
        this.currVal = '';
        this.data = [];
    }

    private getDisplayValue(val: any) {
        let result: any = val;

        if (!this.displayField || !val) {
            return null;
        }

        this.displayField.split('.').forEach((index) => {
            result = result[index];
        });

        return result;
    }

    private getValueValue(val: any) {
        let result: any = val;

        if (!this.valueField || !val) {
            return val;
        }

        this.valueField.split('.').forEach((index) => {
            result = result[index];
        });

        return result;
    }

    private loadData() {
        if (!this.remote) {
            if (this.localFilter) {
                this.data = this._initialData.filter((item) => {
                    if (!this.currVal) {
                        return true;
                    } else {
                        if (this.localFilterCaseSensitive) {
                            return -1 !== this.getDisplayValue(item).indexOf(this.currVal);
                        } else {
                            return -1 !== this.getDisplayValue(item).toLowerCase().indexOf(this.currVal.toLowerCase());
                        }
                    }
                });
            }
        } else {
            this.loading = true;
            this.onQuery.emit(this._currVal);
        }
    }

    private sendModelChange(val: any) {
        this.propagateChange(this.getValueValue(val));
    }

    private searchValueObject(value: any): any {
        if (false === value instanceof Object && this.valueField && this._initialData) {
            this._initialData.forEach((item) => {
                if (value === this.getValueValue(item)) {
                    value = item;
                }
            });
        }
        return value;
    }

    onTriggerClick() {
        if (this.hideList) {
            this._input.nativeElement.focus();
            return;
        }
        this._input.nativeElement.blur();
    }

    writeValue(value: any): void {
        value = this.searchValueObject(value);

        if (value instanceof Object && this.getDisplayValue(value)) {
            this.currVal = this.getDisplayValue(value);
        } else {
            this._tmpVal = value;
        }

        this.onInitValue.emit(value);
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouch = fn;
    }
}
