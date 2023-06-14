import { createStore } from 'redux'

const defaultState = {
    todos: []
}

function todosReducer(state = defaultState, action) {
    let todos = [...state.todos];

    switch (action.type) {
      case 'todo:add':
        todos.unshift(action.todo);
        break;
      case 'todo:remove':
        todos = todos.filter(stateTodo => stateTodo.id !== action.todo.id)
        break;
    case 'todo:done':
        const neededIndex = todos.find(todo => todo.id === action.todo.id);
        if(neededIndex !== -1) {
            todos[neededIndex].isDone = action.todo.isDone;
        }
        break;
      default:
        return state
    }

    return { ...state, todos };
}

export default createStore(todosReducer);