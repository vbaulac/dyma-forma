import { ActionReducerMap } from "@ngrx/store";
import * as todosReducer from "../todo/store/todos.reducer";
import * as routerReducer from '@ngrx/router-store'
import { Params } from "@angular/router";
import { MyRouterState } from "./router.helper";

export interface State {
    router: routerReducer.RouterReducerState<MyRouterState>;
}

export const reducers: ActionReducerMap<State> = {
    // todos: todosReducer.todosReducer,
    router: routerReducer.routerReducer
};