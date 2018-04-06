import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgHeaderComponent } from './bzg-header.component';

xdescribe('BzgHeaderComponent', () => {
  let component: BzgHeaderComponent;
  let fixture: ComponentFixture<BzgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
