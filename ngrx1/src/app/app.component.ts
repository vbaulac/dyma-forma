import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoModel } from './todo.model';
import { Store, select } from '@ngrx/store';
import { State } from './store';
import * as todosAction from './store/todo.actions';
import { TodoState } from './store/todos.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx1';
  public todos$: Observable<TodoModel[]> = this.store.pipe(
    select('todos'),
    map((todoState: TodoState) => todoState.data)
  );

  public message: string;

  constructor(private store: Store<State>) {}

  public addTodo() {
    // this.todoService.addTodo({ message: this.message, done: false });
    console.log('component.ts addTodo')
    this.store.dispatch(new todosAction.CreateTodo({ message: this.message, done: false }));
  }

  public toggleTodo(index: number) {
    this.store.dispatch(new todosAction.ToggleTodo(index));
    // this.todoService.toggleTodo(index);
  }

  public deleteTodo(index: number) {
    this.store.dispatch(new todosAction.DeleteTodo(index));
    // this.todoService.deleteTodo(index);
  }
}
