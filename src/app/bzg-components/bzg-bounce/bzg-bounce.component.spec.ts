import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgBounceComponent } from './bzg-bounce.component';

describe('BzgBounceComponent', () => {
  let component: BzgBounceComponent;
  let fixture: ComponentFixture<BzgBounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgBounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgBounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
