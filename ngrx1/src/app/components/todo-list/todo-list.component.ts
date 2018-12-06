import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoModel } from '../../todo.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../store';
import * as todosAction from '../../store/todo.actions';
import { TodoState } from '../../store/todos.reducer';
import { todoListSelector, selectedTodoSelector, todoListArraySelector } from '../../store/selectors'

@Component({
  selector: 'app-root',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'ngrx1';

  // WITHOUT SELECTORS
  // public todos$: Observable<TodoModel[]> = this.store.pipe(
  //   select('todos'), // selectionne la proprieté ToDo dans l'objet State
  //   map((todoState: TodoState) => todoState.data) // retourne uniquement le data du todos
  // );


  // With selectors || les selectors permette de faire du code reuse concernant le maping a faire des reducer du store
  public todos$: Observable<TodoModel[]> = this.store.pipe(select(todoListArraySelector));

  public selectedTodo$: Observable<TodoModel> = this.store.pipe(select(selectedTodoSelector));

  public message: string;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new todosAction.FetchTodo());
  }

  public addTodo() {
    this.store.dispatch(new todosAction.CreateTodo({ message: this.message, done: false }));
  }

  public toggleTodo(id: string) {
    this.store.dispatch(new todosAction.ToggleTodo(id));
  }

  public deleteTodo(id: string) {
    this.store.dispatch(new todosAction.DeleteTodo(id));
  }
}
