import { useState } from "react";
import styles from './form.module.css'

const Form = ({todos, setTodos}) => {
    // const [todo, setTodo] = useState('');
    const [todo, setTodo] = useState({name:'', done: false});

    let handleSubmit =(e)=>{
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:'', done: false});
    }

  return (
    <div>
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
            <input placeholder="Enter task..." className={styles.formInput} onChange={(e)=>setTodo({name: e.target.value, done: false})} type="text" value={todo.name} />
            <button className={styles.inputButton} type="submit">Add</button>
            </div>
        </form>
    </div>
  )
}

export default Form