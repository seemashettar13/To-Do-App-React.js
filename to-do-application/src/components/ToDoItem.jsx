import { useState } from "react";

const ToDoItem = ({todo, onToggleComplete, onDelete, onEdit}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleSave = () => {
    onEdit(todo.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className="check-box-container">

      <div className="check-box">
      <input type="checkbox" checked = {todo.isComplete} onChange={() => onToggleComplete(todo.id)} />
      </div>
    
 
<div className="save-btn">
{isEditing ? (
        <>
          <input
            type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <span style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}>
          {todo.task}
        </span>
      )}
</div>
 

 <div className="edit-btn">
 <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
 </div>


<div className="delete-btn">
<button onClick={() => onDelete(todo.id)}>Delete</button>
</div>

   
    </div>
  )
}

export default ToDoItem