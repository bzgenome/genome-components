import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgLoadingComponent } from './bzg-loading.component';

describe('BzgLoadingComponent', () => {
  let component: BzgLoadingComponent;
  let fixture: ComponentFixture<BzgLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
