import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

const TodoList = () => {
  const todos=useSelector((state)=>state.todo.todolist)
  console.log(todos)
  const [showdone, setshowdone] = useState(false)

  return (
    <div className='todo-list'>
      <AddTodo/>
      <button
      onClick={
        ()=>setshowdone(!showdone)
      }
      >
        {showdone?"show undone":"show done" }
      </button>
      {
        todos.filter( (todo) =>todo.isDone===showdone ).map((todo) => (
          <TodoItem todo={todo}/>

        ))


      }
    </div>
  )
}

export default TodoList