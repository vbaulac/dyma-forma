import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms';
  public myForm: FormGroup;
  @ViewChild('confirm') confirmPwd: ElementRef;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // this.myForm = this.formBuilder.group({
    //   login: this.formBuilder.group({
    //     username: [''],
    //     email: ['']
    //   }),
    //   hobbies: this.formBuilder.array([]),
    //   password: ['']
    // })

    this.myForm = new FormGroup({
        login: new FormGroup({
          username: new FormControl('', [Validators.required, this.validator1], this.validatorAsync),
          email : new FormControl('', [Validators.required])
        }),
        hobbies: new FormArray([]),
        password : new FormControl('', [this.noMatchingPassword.bind(this)])
    });

    this.myForm.valueChanges.subscribe( value => console.log(value));
    this.myForm.statusChanges.subscribe( value => console.log(value));

    // for dynamic forms : form array

    this.myForm.get('username');

    // this.myForm.setValue( {
    //   username: 'jean',
    //   email: 'jean@live.fr',
    //   password: '1234'
    // });

    // this.myForm.patchValue(
    //   {
    //     username : 'newUsername'
    //   }
    // );  
  }

  addHobby(): void {
    (<FormArray>this.myForm.get('hobbies')).controls.push(new FormControl(''))
  }

  validator1(formControl: FormControl): {[s:string]: boolean} {
    if (formControl.value === 'paul')
    {
      return { 'isPaul': true }
    }
    else {
      return null
    }
  }

  validatorAsync(formControl: FormControl) : Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(null);
        }, 15000);
    });
  }

  noMatchingPassword(formControl: FormControl) : {[s: string]: boolean} {
    if (formControl.value != this.confirmPwd.nativeElement.value) {
      return { noMatch: true };
    } else {
      return null;
    }
  }

// emailValidatorAsync(formControl: FormControl) : Promise<any> | Observable<any> {
//   return this.http.
// }

  submit() {
    console.log(this.myForm);
    // this.myForm.reset();
  }
}
