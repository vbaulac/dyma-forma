import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { PanierComponent } from './panier/panier.component';

import { LogService } from './shared/services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
