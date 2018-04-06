import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgTabSetComponent } from './bzg-tab-set.component';

xdescribe('BzgTabSetComponent', () => {
  let component: BzgTabSetComponent;
  let fixture: ComponentFixture<BzgTabSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgTabSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgTabSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
