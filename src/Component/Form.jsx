import {React,useState} from 'react'
import styles from './form.module.css'

const Form = ({todos,setTodos}) => { 
  // todos has been passed as prop because Todlist and this form shareasame state todos//
    const [todo, setTodo] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
      }
  return (
   
    <form className={styles.todoform} onSubmit={handleSubmit}>
    <div className={styles.inputcontainer}> 
    <input className={styles.modreninput}
      onChange={(e) => setTodo(e.target.value)}
      value={todo}
      type="text"
      placeholder='Entertdo item'
    />
    <button className={styles.modrenbutton} type="submit">Add</button>
    </div>
  </form>
  )
}

export default Form