import { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/todosSlice'

import styles from './Form.module.css';

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
        <form className={styles.todos__form} onSubmit={addNewTodo}>
            <input className={styles.form__input} placeholder='Add new todo...' onChange={setNewTodo} value={newTodoName}></input>
            <input className={styles.form__submit} type="submit" value='+'></input>
        </form>
    );
  }
  
  export default Form;