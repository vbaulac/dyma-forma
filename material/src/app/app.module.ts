import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardsComponent } from './cards/cards.component';
import { StepperComponent } from './stepper/stepper.component';
<<<<<<< HEAD
import { MycoComponent } from './myco/myco.component';
=======
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { TableauxComponent } from './tableaux/tableaux.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 978a58b67f1530a53a556abaa5819b089959a711

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    CardsComponent,
    StepperComponent,
<<<<<<< HEAD
    MycoComponent
=======
    DialogComponentComponent,
    TableauxComponent
>>>>>>> 978a58b67f1530a53a556abaa5819b089959a711
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [DialogComponentComponent],
  providers: [],
  bootstrap: [TableauxComponent]
})
export class AppModule { }