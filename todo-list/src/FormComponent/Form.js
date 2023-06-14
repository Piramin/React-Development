import { useState }  from 'react';
import { useDispatch } from 'react-redux';

function Form() {
    const [newTodoName, setNewTodoName] = useState('');
    
    const dispatch = useDispatch();

    const setNewTodo = event => {
      setNewTodoName(event.target.value);
    }
  
    const addNewTodo = event => {
      event.preventDefault();

      dispatch({type: 'todo:add', todo: {
        name: newTodoName,
        isDone: false,
        id: Date.now()
      }})
  
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