import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgModalComponent } from './bzg-modal.component';

describe('BzgModalComponent', () => {
  let component: BzgModalComponent;
  let fixture: ComponentFixture<BzgModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
