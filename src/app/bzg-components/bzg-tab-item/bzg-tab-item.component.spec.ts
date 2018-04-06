import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgTabItemComponent } from './bzg-tab-item.component';

xdescribe('BzgTabItemComponent', () => {
  let component: BzgTabItemComponent;
  let fixture: ComponentFixture<BzgTabItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgTabItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
