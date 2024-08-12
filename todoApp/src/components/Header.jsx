import styles from './header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={styles.header}>My Todo List</h1>
        <div className= {styles.textDiv}>
        <div>
        <h4>Stay organized and keep track of what needs to be done with our simple and intuitive todo app.</h4>
        </div>
        <h5>Welcome! Here's how to use the app</h5>
        <ul className={styles.olItems}>
          <li><strong className={styles.strong}>📝 Add Tasks:</strong> Type your task in the input field and press the 'Add' button.</li>
          <li><strong className={styles.strong}>✅ Mark as Done:</strong> Click on a task to mark it as completed.</li>
          <li><strong className={styles.strong}>🗑️ Remove Tasks:</strong> Click the 'Delete' button next to a task to remove it from the list.</li>
          <li><strong className={styles.strong}>🚮 Clear All Tasks:</strong> Click the 'Clear All' button to remove all tasks from the list.</li>
          <li><strong className={styles.strong}>📊 Task Count:</strong> The number of completed tasks and the total count are displayed at the bottom of the page.</li>
        </ul>
        </div>
    </div>
  )
}

export default Header