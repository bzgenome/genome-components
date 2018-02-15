import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgUserComponent } from './bzg-user.component';

describe('BzgUserComponent', () => {
  let component: BzgUserComponent;
  let fixture: ComponentFixture<BzgUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
