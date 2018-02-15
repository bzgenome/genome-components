import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgButtonComponent } from './bzg-button.component';

describe('BzgButtonComponent', () => {
  let component: BzgButtonComponent;
  let fixture: ComponentFixture<BzgButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgButtonComponent ]
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
