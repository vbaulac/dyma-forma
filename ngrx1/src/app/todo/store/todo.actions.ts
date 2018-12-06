import { Action } from "@ngrx/store";
import { TodoModel } from "../../todo.model";

export const TODO_CREATE = '[todo] create';
export const TODO_DELETE = '[todo] delete';
export const TODO_TOGGLE = '[todo] toggle';
export const TODO_FETCH= '[todo] fetch';
export const TODO_FETCH_SUCCESS = '[todo] fetch success';
export const TODO_FETCH_ERROR = '[todo] fetch error';

export type TodosActionType = CreateTodo |
                              DeleteTodo |
                              ToggleTodo |
                              FetchTodo |
                              FetchTodoSuccess |
                              FetchTodoError ;

export class CreateTodo implements Action {
    readonly type: string = TODO_CREATE;
    
    constructor(public payload: TodoModel) {}
}

export class DeleteTodo implements Action {
    readonly type: string = TODO_DELETE;
    
    constructor(public payload: string) {}
}

export class ToggleTodo implements Action {
    readonly type: string = TODO_TOGGLE;
    
    constructor(public payload: string) {}
}

export class FetchTodo implements Action {
    readonly type: string = TODO_FETCH;
}

export class FetchTodoSuccess implements Action {
    readonly type: string = TODO_FETCH_SUCCESS;

    constructor(public payload: TodoModel[]) {}
}

export class FetchTodoError implements Action {
    readonly type: string = TODO_FETCH_SUCCESS;

    constructor(public payload: any) {}
}
