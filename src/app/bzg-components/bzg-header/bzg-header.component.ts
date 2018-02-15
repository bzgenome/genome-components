import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bzg-header',
  templateUrl: './bzg-header.component.html',
  styleUrls: ['./bzg-header.component.scss']
})
export class BzgHeaderComponent implements OnInit {

  @Output() changeLanguage: EventEmitter<any> = new EventEmitter<any>();
  @Input() srcLogo?: string;
  @Input() tagLogo?: string;
  @Input() srcIcon?: string;

  constructor(@Inject('genomeConfig') private config: any) {

  }

  ngOnInit() {
  }

  public onChangeLanguage() {
    this.changeLanguage.emit();
  }
}
