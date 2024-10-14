import React from "react";
import { useDispatch } from "react-redux";
import { doneTask, removeTask } from "../redux/todoSlicers/todoSlice";
import EditTask from "./EditTask";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
   <div className="todoitem">
    <div className={`todo-item ${todo.isDone ? "done" : "undone"}`}>
      <div className="text">
        <h2>{todo.title} </h2>
        <p>{todo.description}</p>
      </div>
      <span onClick={() => dispatch(doneTask({ id: todo.id }))}>
        {todo.isDone ? "Done" : "Not Done"}
      </span>
      <button style={{width:"109px", 
  
  padding: "0 19px",
  borderRadius:"8px" ,

  backgroundColor: "rgb(38, 38, 220)",
  color: "rgb(244, 234, 234)",

  border: "none",
  fontSize:" 16px",
  fontWeight: "bold"}} onClick={() => dispatch(removeTask({ id: todo.id }))}>
        Delete item
      </button>
      <EditTask
      todo={
        todo
        
      }

      />


 
    </div>
    </div>
  );
};

export default TodoItem;