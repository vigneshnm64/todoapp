import React from 'react'
import TodoItem from "./TodoItem";
import styles from './todolist.module.css'
const TodoList = ({todos,setTodos}) => {
  return (
    <div className={styles.list}>
    {todos.map((item) => (
        <h3 key={item}>
            <TodoItem item={item} todos={todos} setTodos={setTodos}/>
        </h3>
      ))}
</div>
  )
}

export default TodoList