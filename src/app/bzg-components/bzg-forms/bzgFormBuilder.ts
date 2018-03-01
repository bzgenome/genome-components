import {Injectable} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {BzgFormGroup} from "./bzgForm";

@Injectable()
export class BzgFormBuilder {

  constructor(private _formBuilder: FormBuilder) {
  }

  public group(controlsConfig: { [key: string]: any; }, extra?: { [key: string]: any; } | null): BzgFormGroup {
    const bzgForm = new BzgFormGroup();
    bzgForm.form = this._formBuilder.group(controlsConfig, extra);
    return bzgForm;
  }
}
