import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzgInlineEditorComponent } from './bzg-inline-editor.component';

describe('BzgInlineEditorComponent', () => {
  let component: BzgInlineEditorComponent;
  let fixture: ComponentFixture<BzgInlineEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzgInlineEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzgInlineEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
