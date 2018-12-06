import { TodoModel } from "../todo.model";
import { TodosActionType, 
    TODO_CREATE, 
    TODO_DELETE, 
    TODO_TOGGLE, 
    CreateTodo, 
    ToggleTodo, 
    TODO_FETCH, 
    TODO_FETCH_SUCCESS, 
    FetchTodo, 
    FetchTodoSuccess, 
    DeleteTodo, 
    TODO_FETCH_ERROR, 
    FetchTodoError } from "./todo.actions";

export interface TodoState {
    data: {
        [todoId: string]: TodoModel
    }
    loading: boolean;
    loaded: boolean;
    error: any;
}

const initialState = {
    data: null,
    loading: false,
    loaded: false,
    error: null
}

export function todosReducer(state: TodoState = initialState, action: TodosActionType): TodoState {
    console.log(state);
    console.log(action);

    switch (action.type) {
        case TODO_FETCH : 
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            }
        case TODO_FETCH_SUCCESS : 
            return {
                ...state,
                data: (<FetchTodoSuccess>action).payload.reduce((acc, todo) => {
                    acc[todo.id] = todo;
                    return acc;
                }, { ...state.data }),
                loading: false,
                loaded: true,
                error: null
            }
        case TODO_FETCH_ERROR : 
            return {
                ...state,
                loading: false,
                loaded: false,
                error: (<FetchTodoError>action).payload
            }
        case TODO_CREATE :
            return  {
                ...state,
                data: { ...state.data, [Object.keys(state.data).length]: { ...(<CreateTodo>action).payload, id: Object.keys(state.data).length } }
            };
        case TODO_DELETE :
            const remove = { ...state.data };
            delete remove[(<DeleteTodo>action).payload];
            return { 
                ...state,
                data: remove
            };
        case TODO_TOGGLE :
            const toggle = { ...state.data };
            toggle[(<ToggleTodo>action).payload].done = !toggle[(<ToggleTodo>action).payload].done;
            return {
                ...state,
                data: toggle
            }
        default:
            return state
    }
}