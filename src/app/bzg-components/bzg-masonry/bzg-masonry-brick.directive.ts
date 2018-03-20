import {BzgMasonryComponent} from "./bzg-masonry.component";

interface MutationWindow extends Window {
  MutationObserver: any;
  WebKitMutationObserver: any;
}

declare var window: MutationWindow;

import {
  Directive,
  Inject,
  ElementRef,
  forwardRef,
  OnDestroy,
  AfterViewInit
} from '@angular/core';


@Directive({
  selector: '[bzgMasonryBrick], bzg-masonry-brick'
})

export class BzgMasonryBrickDirective implements OnDestroy, AfterViewInit {

  constructor(private _element: ElementRef,
              @Inject(forwardRef(() => BzgMasonryComponent)) private _parent: BzgMasonryComponent) {
  }

  ngAfterViewInit() {
    this._parent.add(this._element.nativeElement);
    this.watchForHtmlChanges();
  }

  ngOnDestroy() {
    this._parent.remove(this._element.nativeElement);
  }

  /** When HTML in brick changes dinamically, observe that and change layout */
  private watchForHtmlChanges(): void {
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    if (MutationObserver) {
      /** Watch for any changes to subtree */
      const self = this;
      const observer = new MutationObserver(function (mutations, observerFromElement) {
        self._parent.layout();
      });

      // define what element should be observed by the observer
      // and what types of mutations trigger the callback
      observer.observe(this._element.nativeElement, {
        subtree: true,
        childList: true
      });
    }
  }
}
