import { TodoModel } from "../todo.model";
import { TodosActionType, TODO_CREATE, TODO_DELETE, TODO_TOGGLE, CreateTodo, ToggleTodo } from "./todo.actions";

export interface TodoState {
    data: TodoModel[];
}

const initialState = {
    data: [
        {
            message: 'manger une pizza',
            done: false
        }
    ]
}

export function todosReducer(state: TodoState = initialState, action: TodosActionType): TodoState {
    console.log(state);
    console.log(action);

    switch (action.type) {
        case TODO_CREATE :
            return  {
                ...state,
                data: [...state.data, (<CreateTodo>action).payLoad]
            };
        case TODO_DELETE :
            return {
                ...state,
                data: state.data.filter((t, i) => i !== action.payLoad)
            };
        case TODO_TOGGLE :
            const selectedTodo = state.data[(<ToggleTodo>action).payLoad];
            selectedTodo.done = !selectedTodo.done;
            const newTodos = [...state.data];
            newTodos[(<ToggleTodo>action).payLoad] = selectedTodo;

            return {
                ...state,
                data: newTodos
            };
        default:
            return state
    }
}