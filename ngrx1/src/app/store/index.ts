import { ActionReducerMap, MetaReducer, ActionReducer } from "@ngrx/store";
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


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
        console.log('state : ', state);
        console.log('action : ', action);

        return reducer(state, action);
    }
}

export const metaReducers: MetaReducer<State>[] = [logger];