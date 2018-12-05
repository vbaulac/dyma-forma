import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private matSnackbar : MatSnackBar) { }

  ngOnInit() {
  }

  public openDialog(): void {
    this.dialog.open(DialogComponentComponent, {
      width: '500px',
      height: '300px'
    });               
  }

  public info(msg: string): void {
    const snackRef = this.matSnackbar.open(msg, 'Cancel', {
      duration:1500
    });

    snackRef.onAction().subscribe( () => {
      console.log("cancel");
    });

    snackRef.afterDismissed().subscribe(() => {
      console.log('finished')
    })
  }
}
