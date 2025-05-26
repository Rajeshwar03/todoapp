import styles from "./form.module.css";
import { useState } from "react";
export default function Form({todos,setTodos}){
      const [todo, setTodo] = useState({name:"",done:false});
     
     const handleSubmit = (e) => {
    e.preventDefault();
   //to get all the tasks in an array
    setTodos([...todos,todo]);
    setTodo({name:"",done:false});
  };

    return(
    <form  className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
        <input className={styles.modernInput} onChange={(e) => setTodo({name:e.target.value,done:false})} value={todo.name} type="text" placeholder="Enter Task Todo" />
        <button className={styles.modernButton} type="submit">Add</button>
     </div>
      </form>
        
    )
}