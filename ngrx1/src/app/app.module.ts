import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { reducers } from './store/index';
import { TodosEffects } from './todo/store/todos.effects';
import { MyRouterStateSerializer } from './store/router.helper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([      
      { path: '', redirectTo: 'todo', pathMatch: 'full' },
      { path: 'todo', loadChildren: './todo/todo.module#TodoModule' }
    ]),    
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      name: 'to do'
    })
  ],
  providers: [
    TodoService,
    {
      provide: RouterStateSerializer,
      useClass: MyRouterStateSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
