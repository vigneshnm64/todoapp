import React from 'react'
import styles from './item.module.css'
const TodoItem = ({item,todos,setTodos}) => {
  
function handleDelete(item){
  setTodos(todos.filter((todo)=>todo!==item))
  
}
  return (
    <div className={styles.item}>
    <div className={styles.itemName}>{item.name}
    <span>
       <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>x</button>
     </span>
    </div>
     
    <hr className={styles.line} />
      </div>
  )
}

export default TodoItem