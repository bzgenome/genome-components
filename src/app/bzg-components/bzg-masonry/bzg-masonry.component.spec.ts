import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgMasonryComponent } from './bzg-masonry.component';

xdescribe('BzgMasonryComponent', () => {
  let component: BzgMasonryComponent;
  let fixture: ComponentFixture<BzgMasonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgMasonryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
