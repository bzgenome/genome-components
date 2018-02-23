import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bzg-user-avatar',
  templateUrl: './bzg-user-avatar.component.html',
  styleUrls: ['./bzg-user-avatar.component.scss']
})
export class BzgUserAvatarComponent implements OnInit {

  @Input() fullName?: string;
  @Input() styleConfig?: any;

  constructor(@Inject('genomeConfig') private config: any) {
  }

  ngOnInit() {
  }

  getAvatarStyles() {
    const colorAvatar = this.styleConfig ? this.styleConfig["color-avatar"] : this.config["color-avatar"];
    const colorAvatarBackground = this.styleConfig ? this.styleConfig["color-avatar-background"] : this.config["color-avatar-background"];
    return {
      // CSS property names
      'color': colorAvatar,
      'background-color': this.getRgba(colorAvatarBackground, 0.2),
      'border': '1px solid ' + this.getRgba(colorAvatarBackground, 0.7)
    };
  }

  getInitials() {
    if (this.fullName) {
      const initials = this.fullName.replace(/[^a-zA-Z-0-9 ]/g, '').match(/\b\w/g);
      if (initials.length > 2) {
        initials.splice(2, initials.length);
      }
      return initials.join('');
    }
    return '<>';
  }


  private  getRgba(color, opacity) {
    if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
      return color;
    }
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + opacity + ")"
      : null;
  }
}
