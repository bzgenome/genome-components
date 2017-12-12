import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgStepSetComponent } from './bzg-step-set.component';

describe('BzgStepSetComponent', () => {
  let component: BzgStepSetComponent;
  let fixture: ComponentFixture<BzgStepSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgStepSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgStepSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
