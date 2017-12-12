import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgTooltipComponent } from './bzg-tooltip.component';

describe('BzgTooltipComponent', () => {
  let component: BzgTooltipComponent;
  let fixture: ComponentFixture<BzgTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
