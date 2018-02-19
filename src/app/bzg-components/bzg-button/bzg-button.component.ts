import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bzg-button',
  templateUrl: './bzg-button.component.html',
  styleUrls: ['./bzg-button.component.scss']
})





export class BzgButtonComponent implements OnInit {

  @Output() click: EventEmitter<any>;
  @Input() srcIcon?: string;
  @Input() nameIcon?: string;
  @Input() text?: string;

  constructor(@Inject('genomeConfig') protected config: any) {
    this.click = new EventEmitter<any>();
  }

  ngOnInit() {

  }

  public triggerClick() {
    this.click.emit();
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


