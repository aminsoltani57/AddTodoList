import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo"
const TodoList = ({todos, onComplete, onDelete, onUpdateTodo}) => {
    const [edit, setEdit]=useState({id:null, text:"", isComplete:false})
    const editTodo=(newValue)=>{
        onUpdateTodo(edit.id, newValue)
        setEdit({id:null, text:"", isComplete:false})
    }
    const renderTodos=()=>{
        if(todos.length===0) return <p>enter some todos</p>;
        return todos.map((todo) => {
            //برای انکه آی دی را پاس دهیم حتما باید ارو فانکشن آنکامپلیت را بنویسیم
          return  <Todo key={todo.id} 
          todo={todo} 
          onComplete={()=>onComplete(todo.id)}
           onDelete={()=>onDelete(todo.id)  }
           onEdit={()=>setEdit(todo)}
            />
        })
 
    }
    return ( <div>
        {/* //submit to do: here edit s.th */}
        {edit.id ? <TodoForm submitTodo={editTodo} edit={edit}/> : renderTodos()}
    </div> );
}
 
export default TodoList;