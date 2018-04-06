import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BzgButtonComponent} from './bzg-button.component';
import {BzgIconComponent} from "../bzg-icon/bzg-icon.component";

describe('BzgButtonComponent', () => {
  let component: BzgButtonComponent;
  let fixture: ComponentFixture<BzgButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BzgButtonComponent,
        BzgIconComponent
      ],
      providers: [
        {
          provide: 'genomeConfig', useValue: {}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
