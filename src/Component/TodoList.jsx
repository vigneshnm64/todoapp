import React from 'react'
import TodoItem from "./TodoItem";
const TodoList = ({todos}) => {
  return (
    <div>
    {todos.map((item) => (
        <h3 key={item}>
            <TodoItem item={item}/>
        </h3>
      ))}
</div>
  )
}

export default TodoList