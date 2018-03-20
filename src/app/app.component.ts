import {Component} from '@angular/core';

@Component({
  selector: 'bzg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  bricks = [
    {title: 'Brick 1'},
    {title: 'Brick 2'},
    {title: 'Brick 3'},
    {title: 'Brick 4'},
    {title: 'Brick 5'},
    {title: 'Brick 6'}
  ];

  public exampleAction() {
    console.log('run example action');
  }


  addBrick() {
    this.bricks.push({title: 'New Brick'});
  }
}
