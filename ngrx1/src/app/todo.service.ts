import { Injectable } from '@angular/core';
import { TodoModel } from './todo.model';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public getTodo(): Observable<TodoModel[]> {
    return timer(2000).pipe(
      map( () => [ {
        message: 'first todo',
        done: false
      }])
    );
  }

}
