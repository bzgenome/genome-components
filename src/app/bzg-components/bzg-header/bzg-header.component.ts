import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bzg-header',
  templateUrl: './bzg-header.component.html',
  styleUrls: ['./bzg-header.component.scss']
})
export class BzgHeaderComponent implements OnInit {

  @Input() srcLogo?: string;
  @Input() tagText?: string;
  @Input() srcIcon?: string;
  @Input() styleConfig?: any;

  constructor(@Inject('genomeConfig') private config: any) {

  }

  ngOnInit() {
  }

  public getHeaderStyles() {
    const primaryHeaderColor = this.styleConfig ? this.styleConfig["color-header-primary"] : this.config["color-header-primary"];
    const secondaryHeaderColor = this.styleConfig ? this.styleConfig["color-header-secondary"] : this.config["color-header-secondary"];
    const fillHeaderColor = this.styleConfig ? this.styleConfig["color-header-fill"] : this.config["color-header-fill"];
    return {
      // CSS property names
      'fill': fillHeaderColor,
      'background-image': 'linear-gradient(to bottom right, ' + primaryHeaderColor + ' 1.1%, ' + secondaryHeaderColor + ' 100%)',
    };
  }

  public getHeaderIconStyles() {
    const primaryHeaderIconColor = this.styleConfig ?
      this.styleConfig["color-icon-header-primary"] : this.config["color-icon-header-primary"];
    const secondaryHeaderIconColor = this.styleConfig ?
      this.styleConfig["color-icon-header-secondary"] : this.config["color-icon-header-secondary"];
    const fillHeaderIconColor = this.styleConfig ?
      this.styleConfig["color-icon-header-fill"] : this.config["color-icon-header-fill"];
    return {
      // CSS property names
      'fill': fillHeaderIconColor,
      'background-image': 'linear-gradient(to bottom right, ' + primaryHeaderIconColor + ' 1.1%, ' + secondaryHeaderIconColor + ' 100%)',
    };
  }
}
