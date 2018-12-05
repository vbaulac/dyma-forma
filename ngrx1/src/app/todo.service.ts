import { Injectable } from '@angular/core';
import { TodoModel } from './todo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos$: BehaviorSubject<TodoModel[]> = new BehaviorSubject([
    {
      message: 'manger une pizza',
      done: false
    }
  ]);

  constructor() { }

  public addTodo(todo: TodoModel) {
    this.todos$.next([ ...this.todos$.value, todo]);
  }

  public deleteTodo(index: number) {
    this.todos$.next(this.todos$.value.filter((v, i) => i !== index));
  }

  public toggleTodo(index: number) {
    const currentTodos = this.todos$.value;
    currentTodos[index].done = !currentTodos[index].done;
    this.todos$.next(currentTodos);
  }
}
