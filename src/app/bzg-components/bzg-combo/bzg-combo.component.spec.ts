import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgComboComponent } from './bzg-combo.component';

xdescribe('BzgComboComponent', () => {
  let component: BzgComboComponent;
  let fixture: ComponentFixture<BzgComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
