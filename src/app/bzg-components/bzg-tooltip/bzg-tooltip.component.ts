import {
  Component,
  ViewContainerRef,
  Input,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';
import {BzgOverlay} from "./bzg-overlay";
import {BzgOverlayManager} from "./bzg-overlay-manager";


@Component({
  selector: '[bzg-tooltip]',
  template: '<ng-content></ng-content>',
  host: {
    '(mouseover)': 'showTooltip($event)',
    '(mouseout)': 'hideTooltip($event)'
  },
  styleUrls: ['./bzg-tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BzgTooltipComponent implements AfterViewInit {

  @Input('bzg-tooltip') tooltip: string;

  el: HTMLElement;
  ng2Overlay: BzgOverlay;

  constructor(public viewContainerRef: ViewContainerRef,
              public ng2OverlayManager: BzgOverlayManager) {
    this.el = this.viewContainerRef.element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.ng2Overlay = this.getTooltipOverlay(this.el, this.tooltip);
  }

  showTooltip($event) {
    this.ng2OverlayManager.open(this.ng2Overlay, $event);
    $event.stopPropagation();
  }

  hideTooltip($event) {
    this.ng2OverlayManager.close(this.ng2Overlay);
    $event.stopPropagation();
  }

  getTooltipOverlay(el, tooltip) {
    const tooltipEl = document.createElement('bzg-tooltip');
    tooltipEl.style.display = 'none';
    const divEl = document.createElement('div');
    divEl.innerHTML = `
       <div class='tooltip-contents'>${tooltip}</div>
       <div class='tooltip-down-arrow'></div>
    `;
    tooltipEl.appendChild(divEl);

    // el.parentElement.insertBefore(tooltipEl, el.nextSibling);
    el.appendChild(tooltipEl);

    const ng2Overlay = new BzgOverlay(tooltipEl, {
      id: 'tooltip-' + (el.id || Math.floor(Math.random() * 1000000)),
      position: 'top cursor outside'
    });
    this.ng2OverlayManager.register(ng2Overlay);
    return ng2Overlay;
  }
}
