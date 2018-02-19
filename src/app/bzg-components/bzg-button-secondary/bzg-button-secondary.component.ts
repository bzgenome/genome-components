import {Component, OnInit} from '@angular/core';
import {BzgButtonComponent} from "../bzg-button/bzg-button.component";


@Component({
  selector: 'bzg-button-secondary',
  templateUrl: './bzg-button-secondary.component.html',
  styleUrls: ['./bzg-button-secondary.component.scss']
})
export class BzgButtonSecondaryComponent extends BzgButtonComponent {
  public getStyles() {
    return {
      // CSS property names
      'border': '1px solid ' + this.config["color-button-primary"],
      'background-color': this.config["color-button-secondary"]
    };
  }
}
