import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { AppRouting } from './app.routing';
import { PanierService } from './shared/services/panier.service';
import { CocktailModule } from './cocktails-container/cocktail.module';
import { SharedModule } from './shared/modules/shared-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,    
    HttpClientModule,
    CocktailModule,
    SharedModule    
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
