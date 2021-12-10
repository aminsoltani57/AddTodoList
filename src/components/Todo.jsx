//App>todoApp>Todolist>TodoForm>TODO
const Todo = ({todo, onComplete, onDelete, onEdit}) => {
    return (  
        <div  key={todo.id} className="todo">
                  {/* //togel the class with ordery operator */}
            <div onClick={onComplete} className={`todoText  ${todo.isCompleted ? "completed" : ""}`}>{todo.text}</div>
            <div>
                <button className="btn" onClick={onEdit}>Edit</button>
                <button className="btn remove" onClick={onDelete}>delete</button>
            </div>
       
        </div>
    );
}
 
export default Todo;