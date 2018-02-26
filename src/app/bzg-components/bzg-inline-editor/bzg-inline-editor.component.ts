import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'bzg-inline-editor',
  templateUrl: './bzg-inline-editor.component.html',
  styleUrls: ['./bzg-inline-editor.component.scss']
})
export class BzgInlineEditorComponent implements OnInit {
  @Input() value: string;
  @Input() regex: string;
  @Input() regexError: string;
  @Output() changeValue: EventEmitter<string>;
  public isEditing = false;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.changeValue = new EventEmitter<string>();
  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      value: [null, [Validators.required, Validators.pattern(this.regex)]]
    });
  }

  initEdition() {
    this.form.controls.value.setValue(this.value);
    this.isEditing = true;
  }

  triggerChange() {
    if (this.form.valid) {
      this.value = this.form.value['value'];
      this.changeValue.emit(this.value);
      this.isEditing = false;
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  cancelEdition() {
    this.isEditing = false;
  }

  public isFieldInvalid(field: string) {
    return this.form.get(field).touched  && !this.form.get(field).valid;
  }

  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
