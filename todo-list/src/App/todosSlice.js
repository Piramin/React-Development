import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    add: (state, { payload} ) => {
      const todos = [...state.todos];
  
      todos.unshift(payload.todo);

      return { ...state, todos };
    },
    remove: (state, { payload }) => {
      let todos = [...state.todos];
  
      todos = todos.filter(stateTodo => stateTodo.id !== payload.todo.id)

      return { ...state, todos };
    },
    done: (state, { payload }) => {
      const todos = [...state.todos];
  
      const neededIndex = todos.find(todo => todo.id === payload.todo.id);
      if(neededIndex !== -1) {
          todos[neededIndex].isDone = payload.todo.isDone;
      }

      return { ...state, todos };
    }
  }
})

export const { add, remove, done } = todosSlice.actions

export default todosSlice.reducer