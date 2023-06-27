import { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { done, remove } from '../store/todosSlice'

import styles from './Todo.module.css'

function Todo(props) {
  const todo = props.todo;

  const [isDone, setIsDoneFlag] = useState(todo.isDone);

  const dispatch = useDispatch();

  const doneTodo = event => {
    const updatedIsDone = event.target.checked;

    dispatch(done({ todo: {
      name: todo.name,
      isDone: updatedIsDone,
      id: todo.id
    } }))

    setIsDoneFlag(updatedIsDone);
  }

  const removeTodo = () => {
    dispatch(remove({ todo }))
  }

  const labelClass = isDone ? `${styles.todo__name} ${styles.isDone}` : styles.todo__name;

  return (
    <div className={styles.todo}>
      <input className={styles.todo__done} type="checkbox" onChange={doneTodo} defaultChecked={isDone}></input>
      <label className={labelClass}>{todo.name}</label>
      <button className={styles.todo__remove} onClick={removeTodo}>x</button>
    </div>
  );
}

export default Todo;
