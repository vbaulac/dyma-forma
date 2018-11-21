import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CanComponentDeactivate } from '../app.auth.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, CanComponentDeactivate {
  @ViewChild('userInput') public inputOfUser: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.inputOfUser.nativeElement.value.length == 0) {   
      return true;
    }
    else {
      return confirm("Données non enregistrées");
    }
  }

}
