import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    add: (state, { payload } ) => {
      state.todos.unshift(payload.todo);

      return state;
    },
    remove: (state, { payload }) => {
      let todos = [...state.todos];
  
      todos = todos.filter(stateTodo => stateTodo.id !== payload.todo.id)

      return { ...state, todos };
    },
    done: (state, { payload }) => {
      const neededIndex = state.todos.findIndex(todo => todo.id === payload.todo.id);

      if (neededIndex !== -1) {
          state.todos[neededIndex].isDone = payload.todo.isDone;
      }

      return state;
    }
  }
})

export const { add, remove, done } = todosSlice.actions

export default todosSlice.reducer