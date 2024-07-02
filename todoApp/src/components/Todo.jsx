import { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";
import styles from './todo.module.css'
const Todo = () => {
    const [todos, setTodos] = useState([]);

    let clearEverything =()=>{
       setTodos([]);
    }
    
    const completedTodos = todos.filter((todo)=>todo.done).length;
    const totalTodos = todos.length;
  return (
    <div>
        <Form todos={todos} setTodos={setTodos}/>
        <Todolist todos={todos} setTodos={setTodos}/>
        <div className={styles.clearDiv}>
           <button className={styles.clearBtn} onClick={clearEverything}>Clear All</button>
        </div>
        <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
  )
}

export default Todo;