import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bzg-icon',
  templateUrl: './bzg-icon.component.html',
  styleUrls: ['./bzg-icon.component.scss']
})
export class BzgIconComponent implements OnInit {

  @Input() srcIcon?: string;
  @Input() size? = 16;
  @Input() nameIcon: string;

  constructor(@Inject('genomeConfig') private config: any) {
  }

  ngOnInit() {
  }

  getXlinkHref() {
    const iconsSpritePath = this.config["icons-sprite-path"] || "";
    return this.srcIcon ?
      this.srcIcon : iconsSpritePath + "#" + this.nameIcon;
  }

}
