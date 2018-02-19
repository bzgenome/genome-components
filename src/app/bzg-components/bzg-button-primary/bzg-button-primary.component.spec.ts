import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgButtonPrimaryComponent } from './bzg-button-primary.component';

describe('BzgButtonPrimaryComponent', () => {
  let component: BzgButtonPrimaryComponent;
  let fixture: ComponentFixture<BzgButtonPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgButtonPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgButtonPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
