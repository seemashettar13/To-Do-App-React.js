import Header from "./components/Header"
import {useState} from "react"
import ToDoList from "./components/ToDoList"
import './App.css'; //

const App = () => {

  const [todos, setTodos] = useState([
    // {id : 1, task : "Buy Groceries", isComplete :false },
    // {id : 2, task : "Study React", isComplete :false }
  ]);

  const [newTask, setNewTask] = useState("");

  const handleTask = () => {
    if(newTask.trim() === "") return
  

  const newTodo = {
    id : Date.now(),
    task : newTask,
    isComplete : false
  };

  setTodos([...todos, newTodo]);
  setNewTask("");
  }

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updatedTodos);
  };
  
  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  

  const handleEdit = (id, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };
  
  return (
    <div className="app-container">
      <div className="todo-container">

    
      <Header/>
      <div className="add-task">

        <div className="add-new-task">

          <div className="enter-task"> 
          <input type="text" value={newTask}  onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a New Task"/>
          </div>
          <div className="add-tbtn">
          <button onClick={handleTask}>Add</button>
          </div>
      
     
      
        </div>
      </div>
   
<div className="items">
<ToDoList todos={todos} onToggleComplete={handleToggleComplete}  onDelete={handleDelete}  onEdit={handleEdit}/>
</div>
  

    </div>
    </div>
  )
}

export default App