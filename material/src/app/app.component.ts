import { Component } from '@angular/core';
import { FormGroup, Validator, FormControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      input: [''],
      checkbox: [''],
      radio: [''],
      slidetoggle: ['']
    })
  }

  // public onSubmit() {
  //   console.log(this.form.value);
  // }
}
