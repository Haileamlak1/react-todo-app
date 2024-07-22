import styles from './todoitem.module.css'

const TodoItem = ({item, todos, setTodos}) => {
  let deleteItem =(item)=>{
    console.log(item, " deleted successfully!")
    setTodos(todos.filter((todo) => todo !== item));
  }
  let handleClick = (name)=>{
    const newArray =
    todos.map((todo)=> todo.name === name? {...todo, done: !todo.done}: todo);
    setTodos(newArray);
  }
  const className = item.done? styles.completed: "";
  return (
    <div className={styles.item}>
        <div className={styles.itemName}>
          <span className={className} onClick={()=>handleClick(item.name)}>{item.name}</span>
          <span>
            <button onClick={()=>deleteItem(item)} className={styles.deleteBtn}>delete</button>
          </span>
        </div>
        <hr className={styles.line}/>
    </div>
  )
}

export default TodoItem