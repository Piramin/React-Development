import { configureStore } from '@reduxjs/toolkit'

import todosSlice from './todosSlice'

export default configureStore({
  reducer: todosSlice,
})