import { useSelector } from 'react-redux';

import Todo from './Todo';

function App() {
  const todos = useSelector((state) => state.todos)

  return (
    <div>
      {todos.map(todo => {
          return <Todo todo={todo}></Todo>;
        })}
    </div>
  );
}

export default App;
