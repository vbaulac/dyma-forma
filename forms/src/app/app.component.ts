import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms';
  public myForm: FormGroup;

  ngOnInit() {
      this.myForm = new FormGroup({
        username: new FormControl('', [Validators.required, this.validator1], this.validatorAsync),
        email : new FormControl('', [Validators.required]),
        password : new FormControl('')
    });    

    this.myForm.setValue( {
      username: 'jean',
      email: 'jean@live.fr',
      password: '1234'
    });

    this.myForm.patchValue(
      {
        username : 'newUsername'
      }
    );  
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

// emailValidatorAsync(formControl: FormControl) : Promise<any> | Observable<any> {
//   return this.http.
// }

  submit() {
    console.log(this.myForm);
    // this.myForm.reset();
  }
}
