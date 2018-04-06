import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgUserAvatarComponent } from './bzg-user-avatar.component';

xdescribe('BzgUserAvatarComponent', () => {
  let component: BzgUserAvatarComponent;
  let fixture: ComponentFixture<BzgUserAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgUserAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
