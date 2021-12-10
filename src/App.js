//App>todoApp>Todolist>TodoForm>TODO
import TodoApp from "./components/TodoApp"
import "./App.css";
function App()  {
    return (<div className="App">
        <div><h1> TodoList App - saheb</h1></div><div>
    <TodoApp /> </div>
    </div>  );
}
 
export default App;
    // TodoApp:todo
    // TodoForm=> input + button=> add todo
    // TodoList=>todos.map(...)=>