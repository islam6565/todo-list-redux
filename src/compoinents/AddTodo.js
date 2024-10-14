import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/todoSlicers/todoSlice';








const AddTodo = () => {
 const dispatch=useDispatch()
  const [task, settask] = useState({
    id:Math.random(),
    title:"",
    description:"",
    isDone:false


  })
  return (
    <div className='add-task'>
        <input type="text"  placeholder="Enter a task"
        onChange={(e) =>settask({...task,title:e.target.value})} />

      
        <input type="text" 
        placeholder="Enter a description"
        onChange={(e) =>settask({...task,description:e.target.value})} />
        <button 
        onClick={() => dispatch(addTask(task))}>
        
            add new task
        </button>
    </div>
  )
}

export default AddTodo