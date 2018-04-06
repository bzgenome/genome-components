import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgStepItemComponent } from './bzg-step-item.component';

xdescribe('BzgStepItemComponent', () => {
  let component: BzgStepItemComponent;
  let fixture: ComponentFixture<BzgStepItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgStepItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgStepItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
