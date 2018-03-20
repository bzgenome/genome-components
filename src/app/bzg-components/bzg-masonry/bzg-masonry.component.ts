import {BzgMasonryOptions} from "./bzg-masonryOptions";
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  ElementRef,
  EventEmitter,
} from '@angular/core';

import * as masonry from 'masonry-layout';

declare var require: any;
declare var imagesLoaded: any;


@Component({
  selector: '[bzg-masonry], bzg-masonry',
  template: '<ng-content></ng-content>'
})
export class BzgMasonryComponent implements OnInit, OnDestroy {

  constructor(private _element: ElementRef) {
  }

  public _msnry: any;
  // private _imagesLoaded = null;
  // Inputs
  @Input() public options: BzgMasonryOptions;
  @Input() public useImagesLoaded: Boolean = false;

  // Outputs
  @Output() layoutComplete: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() removeComplete: EventEmitter<any[]> = new EventEmitter<any[]>();

  ngOnInit() {

    // if (this.useImagesLoaded) {
    //     this._imagesLoaded = require('imagesloaded');
    // }

    if (!this.options) {
      this.options = {};
    }


    if (!this.options.itemSelector) {
      this.options.itemSelector = '[bzg-masonry-brick], bzg-masonry-brick';
    }


    if (this._element.nativeElement.tagName === 'BZG-MASONRY') {
      this._element.nativeElement.style.display = 'block';
    }


    this._msnry = new masonry(this._element.nativeElement, this.options);

    this._msnry.on('layoutComplete', (items: any) => {
      this.layoutComplete.emit(items);
    });
    this._msnry.on('removeComplete', (items: any) => {
      this.removeComplete.emit(items);
    });
  }

  ngOnDestroy() {
    if (this._msnry) {
      this._msnry.destroy();
    }
  }

  public layout() {
    setTimeout(() => {
      this._msnry.layout();
    });
  }

  public add(element: HTMLElement) {
    let isFirstItem = false;
    if (this._msnry.items.length === 0) {
      isFirstItem = true;
    }

    if (this.useImagesLoaded) {
      imagesLoaded(element, (instance: any) => {
        this._element.nativeElement.appendChild(element);
        this._msnry.appended(element);
        if (isFirstItem) {
          this.layout();
        }
      });

      this._element.nativeElement.removeChild(element);
    } else {
      this._msnry.appended(element);
      if (isFirstItem) {
        this.layout();
      }
    }
  }

  public remove(element: HTMLElement) {
    this._msnry.remove(element);
    this.layout();
  }
}
