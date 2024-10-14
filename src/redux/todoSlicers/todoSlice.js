import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todolist:[
    {id: Math.random(),
     title: 'todo item 1',
     description:'This is a description of todo item 1.',
     isDone:false},
     {
      id: Math.random(),
      title: 'todo item 2',
      description:'This is a description of todo item 2.',
      isDone:false},
      {
        id: Math.random(),
        title: 'todo item 3',
        description:'This is a description of todo item 3.',
        isDone:true
      }

  ]

}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    
    addTask: (state, action) => {
       state.todolist.push(action.payload);
    },
    removeTask: (state, action) => {
      state.todolist = state.todolist.filter(item => item.id !== action.payload.id);
      


  },
  doneTask:(state, action) => {
    let task=
    state.todolist.findIndex((el) => el.id === action.payload.id);
    state.todolist[task]={...state.todolist[task],
      isDone: !state.todolist[task].isDone};
    },
    editTask:(state, action) => {
      let task=
      state.todolist.findIndex((el) => el.id === action.payload.id);
      state.todolist[task]=action.payload.edited
        }

    
}})

// Action creators are generated for each case reducer function
export const { addTask, removeTask ,doneTask ,editTask} = todoSlice.actions

export default todoSlice.reducer