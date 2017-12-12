import {Injectable} from "@angular/core";

import {BzgOverlay} from "./bzg-overlay";

@Injectable()
export class BzgOverlayManager {
    //list of overlay objects
    static overlays: { [id: string]: BzgOverlay } = {};

    register(overlay: BzgOverlay): void {
        BzgOverlayManager.overlays[overlay.id] = overlay;
        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
    }

    open(arg: string | BzgOverlay, event?: Event): void {
        let overlay: BzgOverlay = typeof arg === 'string' ? BzgOverlayManager.overlays[arg] : arg;
        if (!overlay.opened) {
            overlay.positionIt(event);
            overlay.opened = true;
        }
    }

    close(arg: string | BzgOverlay): void {
        let overlay: BzgOverlay = typeof arg === 'string' ? BzgOverlayManager.overlays[arg] : arg;
        overlay.element.style.display = 'none';
        overlay.opened = false;
    }
}