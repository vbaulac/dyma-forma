import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { TODO_FETCH, FetchTodo, FetchTodoSuccess, FetchTodoError } from "./todo.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { TodoService } from "../todo.service";
import { TodoModel } from "../todo.model";

@Injectable()
export class TodosEffects {
    @Effect() // { dispatch:false } si pas besoin de retourner d'action
    public fetchTodo$: Observable<Action> = this.actions$.pipe(
        ofType(TODO_FETCH),
        switchMap( (fetchTodo: FetchTodo) => {
            return this.todoService.getTodo();
        }),
        map( (todos: TodoModel[]) => {
           return new FetchTodoSuccess(todos); 
        }),
        catchError( (err: any) => {
            return of(new FetchTodoError(err));
        })
    )

    constructor(private actions$: Actions,
                private todoService: TodoService) {}

}