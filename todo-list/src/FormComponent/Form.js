import { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../App/todosSlice'

function Form() {
    const [newTodoName, setNewTodoName] = useState('');
    
    const dispatch = useDispatch();

    const setNewTodo = event => {
      setNewTodoName(event.target.value);
    }
  
    const addNewTodo = event => {
      event.preventDefault();

      dispatch(add({ todo: {
        name: newTodoName,
        isDone: false,
        id: Date.now()
      }}))
  
      setNewTodoName('');
    };
  
    return (
        <form onSubmit={addNewTodo}>
            <input placeholder='Add new todo...' onChange={setNewTodo} value={newTodoName}></input>
            <input type="submit" value='+'></input>
        </form>
    );
  }
  
  export default Form;