import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './store/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/todos.effects';

@NgModule({
  declarations: [
    TodoComponent, 
    TodoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffects]),
    RouterModule.forChild([
      { path: '', component: TodoComponent, children: [
        { path: ':id', component: TodoListComponent },
        { path: '', component: TodoListComponent }
      ] }
    ])
  ]
})
export class TodoModule { }
