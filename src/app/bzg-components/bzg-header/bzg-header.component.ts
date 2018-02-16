import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bzg-header',
  templateUrl: './bzg-header.component.html',
  styleUrls: ['./bzg-header.component.scss']
})
export class BzgHeaderComponent implements OnInit {

  @Output() changeLanguage: EventEmitter<any> = new EventEmitter<any>();
  @Input() srcLogo?: string;
  @Input() tagText?: string;
  @Input() srcIcon?: string;

  constructor(@Inject('genomeConfig') private config: any) {

  }

  ngOnInit() {
  }

  public getHeaderStyles() {
    let primaryHeaderColor = this.config["color-header-primary"];
    let secondaryHeaderColor = this.config["color-header-secondary"];
    let fillHeaderColor = this.config["color-header-fill"];
    return {
      // CSS property names
      'fill': fillHeaderColor,
      'background-image': 'linear-gradient(to bottom right, ' + primaryHeaderColor + ' 1.1%, ' + secondaryHeaderColor + ' 100%)',
    };
  }

  public getHeaderIconStyles() {
    let primaryHeaderIconColor = this.config["color-icon-header-primary"];
    let secondaryHeaderIconColor = this.config["color-icon-header-secondary"];
    let fillHeaderIconColor = this.config["color-icon-header-fill"];
    return {
      // CSS property names
      'fill': fillHeaderIconColor,
      'background-image': 'linear-gradient(to bottom right, ' + primaryHeaderIconColor + ' 1.1%, ' + secondaryHeaderIconColor + ' 100%)',
    };
  }
}
