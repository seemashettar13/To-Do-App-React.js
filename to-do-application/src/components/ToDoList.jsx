import ToDoItem from "./ToDoItem"

const ToDoList = ({todos, onToggleComplete, onDelete, onEdit}) => {
  return (
    <>
    {todos.map(todo => {
   return  <ToDoItem key = {todo.id} todo = {todo}  onToggleComplete={onToggleComplete} onDelete={onDelete} onEdit={onEdit} />
    })}
    
    </>
  )
}

export default ToDoList