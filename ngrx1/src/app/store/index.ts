import { ActionReducerMap } from "@ngrx/store";
import * as todosReducer from "./todos.reducer";

export interface State {
    todos: todosReducer.TodoState;
}

export const reducers: ActionReducerMap<State> = {
    todos: todosReducer.todosReducer
};