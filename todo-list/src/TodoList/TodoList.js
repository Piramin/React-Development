
import Form from './FormComponent/Form';
import Todos from './TodoComponents/Todos';

function TodoList() {
  const lineStyles = {
    borderColor: '#0075ff',
    opacity: 0.8,
    margin: '15px 0 15px 0'
  };

  return (
    <div>
      <Form></Form>
      <hr style={lineStyles}></hr>
      <Todos></Todos>
    </div>
  );
}

export default TodoList;
