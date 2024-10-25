import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
const Todo = () => {
  const [todos, setTodos] = useState([]);
   return (
    <div>
      {/* todos shared by to component hence state is used as props */}
     <Form todos={todos} setTodos={setTodos} />
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default Todo;
