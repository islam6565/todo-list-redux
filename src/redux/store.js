import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlicers/todoSlice'

export const store = configureStore({
  reducer: {
    todo:todoSlice,
  },
})
