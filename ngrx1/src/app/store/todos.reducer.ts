import { TodoModel } from "../todo.model";
import { TodosActionType, TODO_CREATE, TODO_DELETE, TODO_TOGGLE, CreateTodo, ToggleTodo, TODO_FETCH, TODO_FETCH_SUCCESS, FetchTodo, FetchTodoSuccess, DeleteTodo, TODO_FETCH_ERROR, FetchTodoError } from "./todo.actions";

export interface TodoState {
    data: TodoModel[];
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
                data: (<FetchTodoSuccess>action).payload,
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
                data: [...state.data, (<CreateTodo>action).payload]
            };
        case TODO_DELETE :
            return {
                ...state,
                data: state.data.filter((t, i) => i !== (<DeleteTodo>action).payload)
            };
        case TODO_TOGGLE :
            const selectedTodo = state.data[(<ToggleTodo>action).payload];
            selectedTodo.done = !selectedTodo.done;
            const newTodos = [...state.data];
            newTodos[(<ToggleTodo>action).payload] = selectedTodo;

            return {
                ...state,
                data: newTodos
            };
        default:
            return state
    }
}