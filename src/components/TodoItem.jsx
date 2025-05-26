import styles from "./todoitem.module.css";

export default function TOdoItem({item,todos,setTodos}){
    function handledelete(item){
        console.log("Delete button clicked for item",{item});
        setTodos( todos.filter((todo)=>todo!==item))
    }
    function handleClick(name){
       setTodos(
        todos.map((todo)=>todo.name===name?{...todo,done: !todo.done}:todo)
    
    )
    }
    const classNmae=item.done? styles.completed :""
    return<div className={styles.item}>
        <div className={styles.itemName}>
            <span className={classNmae}onClick={()=>handleClick(item.name)}>
            {item.name}
        </span>
            <span>
            <button onClick={()=>handledelete(item)} className={styles.deleteButton}>x</button>
        </span>
        </div>
        
        <hr className={styles.line}/>
    </div>
}