import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bzg-button',
  templateUrl: './bzg-button.component.html',
  styleUrls: ['./bzg-button.component.scss']
})


export class BzgButtonComponent implements OnInit {

  @Input() srcIcon?: string;
  @Input() nameIcon?: string;
  @Input() text?: string;

  constructor(@Inject('genomeConfig') protected config: any) {
  }

  ngOnInit() {

  }

  public getText() {
    return this.text ? this.text : false;
  }

  public getStyles() {
    return {
      // CSS property names
      'border': '1px solid ' + this.config["color-button-primary"],
      'background-color': this.config["color-button-primary"]
    };
  }

}


