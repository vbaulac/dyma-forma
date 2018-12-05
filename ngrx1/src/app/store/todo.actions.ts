import { Action } from "@ngrx/store";
import { TodoModel } from "../todo.model";

export const TODO_CREATE = '[todo] create';
export const TODO_DELETE = '[todo] delete';
export const TODO_TOGGLE = '[todo] toggle';

export type TodosActionType = CreateTodo |
                              DeleteTodo |
                              ToggleTodo;

export class CreateTodo implements Action {
    readonly type: string = TODO_CREATE;
    
    constructor(public payLoad: TodoModel) {}
}

export class DeleteTodo implements Action {
    readonly type: string = TODO_DELETE;
    
    constructor(public payLoad: number) {}
}

export class ToggleTodo implements Action {
    readonly type: string = TODO_TOGGLE;
    
    constructor(public payLoad: number) {}
}