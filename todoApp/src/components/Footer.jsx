import styles from './footer.module.css'
const Footer = ({completedTodos, totalTodos}) => {
  return (
    <div className={styles.footer}>
        <span className={styles.items}>Completed Todos: {completedTodos}</span>
        <span className={styles.items}>Total Todos: {totalTodos}</span>
    </div>
  )
}

export default Footer;