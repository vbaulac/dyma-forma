import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todos.reducer';
import * as routerReducer from '@ngrx/router-store';
import { MyRouterState } from '../../store/router.helper';
import { TodoModel } from '../../todo.model';

// selectors ont un cache !! si les input n'ont pas changés

// "root" selector for todos
export const todosSelector = createFeatureSelector<TodoState>('todos');

// selector for all the todos
export const todoListSelector = createSelector(todosSelector, (todoState: TodoState) => {
    return todoState.data;
});

export const todoListArraySelector = createSelector(todosSelector,
    (todoState: TodoState) => {
        if (todoState.data) {
            return Object.keys(todoState.data).map( idTodo => todoState.data[idTodo]);
        } else {
            return null;
        }
    })

// "root" selector for router
export const routerSelector = createFeatureSelector<routerReducer.RouterReducerState<MyRouterState>>('router');

// selector for the state of the router
export const myRouterStateSelector = createSelector(routerSelector, routerState => {
    return routerState.state;
});

// combine "parents" selector to create a specific selector for a specific job, that we can user everywhere in the app
export const selectedTodoSelector = createSelector(
    todoListSelector, 
    myRouterStateSelector,
    (todos: { [todoId: string]: TodoModel}, myRouterState: MyRouterState) => {
        const todoId = myRouterState.params.id;
        if (todoId && todos) {
            return todos[todoId];
            // return todos.filter(x => x.id === todoId)[0];
        } else {
            return null;
        }
    });