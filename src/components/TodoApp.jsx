import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// global state(todos)
const TodoApp = () => {
    const [todos, setTodos]=useState([]);
    //filteredTodos:its array for help
//  we should use to another state for help
//(if we have 5 completed and 5 uncompleted state of list cant give me the complete and another select correctly)
    const [filteredTodos, setFilteredTodos]=useState([]);
    const [selectedOption, setSelectedOption]=useState("All");
    //the best where to change state conditional is useEffect:if the todo change, filterTodo should change
    useEffect(()=>{
        filterTodos(selectedOption.value);
    }, [todos, selectedOption]);
    const addTodo=(input)=>{
const newTodo={id:Math.floor(Math.random()*1000), text:input, isCompleted:false}
        setTodos([...todos, newTodo]) 
    }
    //we want tochange todos and we must write completeTodo here(in TodoApp)
    const compeleteTodo=(id)=>{
        console.log(id);
        //item=> findIndex=> CLONE => !IScomplete=> clone=> setTOdos
        const index=todos.findIndex(todo=>todo.id===id);
        //its better to check piping with log
        console.log(index)
        // you should get clone to do not mutate
        const selectedTodo={...todos[index]};
        // reverse the true falsy of object
        selectedTodo.isCompleted=!selectedTodo.isCompleted;
        console.log(selectedTodo);
        //clone:todos
        const updatedTodos=[...todos];
        updatedTodos[index]=selectedTodo;
        setTodos(updatedTodos);

    }
    const removeTodo=(id)=>{
console.log(id);
const filterdTodos= todos.filter((t)=> t.id !== id );
setTodos(filterdTodos)
    }
    const updateTodo=(id, newValue)=>{
        console.log(id)
        const index=todos.findIndex(todo=>todo.id===id);
        //its better to check piping with log
        console.log(index)
        // you should get clone to do not mutate
        const selectedTodo={...todos[index]};
        // reverse the true falsy of object
        selectedTodo.text=newValue;
        console.log(selectedTodo);
        //clone:todos
        const updatedTodos=[...todos];
        updatedTodos[index]=selectedTodo;
        setTodos(updatedTodos);

    }
    const filterTodos=(selectedOption)=>{
console.log(selectedOption);
switch(selectedOption){
// case "All":
//      setFilteredTodos(todos);
// break;
case "Complete":
    setFilteredTodos(todos.filter(t=> t.isCompleted));
    break;
    case "unComplete":
        setFilteredTodos(todos.filter(t=>!t.isCompleted))
        break;
default:
    setFilteredTodos(todos);
   } };
   const selectHandler=(e)=>{
    filterTodos(e.value)
    setSelectedOption(e)
        } 
    return (  <div className="container">
        <NavBar oncompletedTodo={todos.filter(t=> !t.isCompleted).length} 
       selectedOption={selectedOption} 
        onSelect={selectHandler} />
        {/* // میتوان تودو و ست تودو را نیز پاس داد */}
        <TodoForm submitTodo={addTodo} />
        <TodoList todos={filteredTodos} onComplete={compeleteTodo} onDelete={removeTodo} onUpdateTodo={updateTodo}/>
    </div>);
}
 
export default TodoApp;