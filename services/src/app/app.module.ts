import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { PanierComponent } from './panier/panier.component';

import { PanierService } from './shared/services/panier.service';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
