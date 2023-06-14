import { useState } from 'react';

import './App.css';

import Form from './FormComponent/Form';
import Todo from './TodoComponent/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = newTodo => {
    setTodos([newTodo, ...todos])
  };

  return (
    <div>
      <Form addNewTodo={addNewTodo}></Form>
      <hr></hr>
      {todos.map(todo => {
          return <Todo name={todo.name}></Todo>;
        })}
    </div>
  );
}

export default App;
