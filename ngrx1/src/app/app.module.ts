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
import { TodosEffects } from './store/todos.effects';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MyRouterStateSerializer } from './store/router.helper';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: 'todo', component: TodoListComponent },
      { path: '', redirectTo: 'todo', pathMatch: 'full' }
    ]),    
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffects]),
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
