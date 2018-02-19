import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgButtonSecondaryComponent } from './bzg-button-secondary.component';

describe('BzgButtonSecondaryComponent', () => {
  let component: BzgButtonSecondaryComponent;
  let fixture: ComponentFixture<BzgButtonSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgButtonSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgButtonSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
