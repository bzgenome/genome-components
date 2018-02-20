import {
    Component,
    ViewContainerRef,
    Input,
    ViewEncapsulation,
    OnInit
} from '@angular/core';
@Component({
  selector: 'bzg-loading',
  templateUrl: './bzg-loading.component.html',
  styleUrls: ['./bzg-loading.component.scss']
})
export class BzgLoadingComponent implements OnInit {

 @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
