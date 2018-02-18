import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgIconComponent } from './bzg-icon.component';

describe('BzgIconComponent', () => {
  let component: BzgIconComponent;
  let fixture: ComponentFixture<BzgIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
