import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bzg-user',
  templateUrl: './bzg-user.component.html',
  styleUrls: ['./bzg-user.component.scss']
})
export class BzgUserComponent implements OnInit {
  @Input() fullName?: string;
  @Input() email?: string;
  @Input() styleConfig?: any;

  constructor(@Inject('genomeConfig') private config: any) {

  }

  ngOnInit() {
  }

  getUserInfoStyles() {
    const userInfoColor = this.styleConfig ? this.styleConfig["color-user-info"] : this.config["color-user-info"];
    return {
      // CSS property names
      'color': userInfoColor
    };
  }

}
