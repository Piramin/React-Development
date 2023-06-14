import { useState }  from 'react';

function Form(props) {
    const [newTodoName, setNewTodoName] = useState('');
    
    const setNewTodo = event => {
      setNewTodoName(event.target.value);
    }
  
    const addNewTodo = event => {
      event.preventDefault();
  
      props.addNewTodo({
        name: newTodoName,
        isDone: false
      });
  
      setNewTodoName('');
    };
  
    return (
        <form onSubmit={addNewTodo}>
            <input placeHolder='New todo...' onChange={setNewTodo} value={newTodoName}></input>
            <input type="submit" value='+'></input>
        </form>
    );
  }
  
  export default Form;