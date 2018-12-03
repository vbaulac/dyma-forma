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
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { TableauxComponent } from './tableaux/tableaux.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    CardsComponent,
    StepperComponent,
    DialogComponentComponent,
    TableauxComponent
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