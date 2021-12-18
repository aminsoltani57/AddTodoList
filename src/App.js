// //App>todoApp>Todolist>TodoForm>TODO
// import TodoApp from "./components/TodoApp"

import ExpenceApp from "./components/ExpenceApp";

import "./App.css";
function App()  {
    return (<div className="App">
        <header>
           <h2>Expence tracker</h2> 
        </header>
    <ExpenceApp />

    </div>  );
}
 
export default App;
    // TodoApp:todo
    // TodoForm=> input + button=> add todo
    // TodoList=>todos.map(...)=>