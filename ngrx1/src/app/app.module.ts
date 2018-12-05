import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { reducers } from './store/index';
import { TodosEffects } from './store/todos.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,    
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffects]),
    StoreDevtoolsModule.instrument({
      name: 'to do'
    })
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
