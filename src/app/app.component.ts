import {Component} from '@angular/core';

@Component({
  selector: 'bzg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public exampleAction() {
    console.log('run example action');
  }
}
