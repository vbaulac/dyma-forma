import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  public form: FormGroup;
  public options: string[] = [
    'One',
    'Two',
    'Three'
  ];

  public filterOptions: Observable<string[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      input: [''],
      checkbox: [''],
      radio: [''],
      slidetoggle: [''],
      email: ['', Validators.email],
      select: [''],
      slider: [''],
      date: [''],
      autoc: ['']
    });

    
    this.filterOptions = this.form.get('autoc').valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterPlease(val))); // pour les call asyncrone, utiliser switchMap
  }

  filterPlease(val: string) : string[] {
    if (!val) {
      return this.options;
    } else {
      return this.options.filter(option => {
        return option.toLowerCase().startsWith(val.toLowerCase());
      })
    }
  }

  getErrorMessage() {
    if (this.form.get('email').hasError('required')) {
      return "L'email est requis";
    } else if (this.form.get('email').hasError('email')) {
      return "L'email n'est pas valide";
    } else {
      return "";
    }
  }

}
