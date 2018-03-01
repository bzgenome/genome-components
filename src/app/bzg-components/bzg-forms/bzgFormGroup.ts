import {FormControl, FormGroup} from "@angular/forms";

export class BzgFormGroup {
  public form: FormGroup;

  public isValid() {
    return this.form.valid;
  }

  public getValue() {
    return this.form.value;
  }

  public isFieldInvalid(field: string) {
    return this.form.get(field).touched && !this.isRequiredInvalid(field) && !this.form.get(field).valid;
  }

  public isRequiredInvalid(field: string) {
    return this.form.get(field).touched && this.form.get(field).errors && this.form.get(field).errors['required'];
  }

  public validateAll() {
    this.validateAllFormFields(this.form);
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
