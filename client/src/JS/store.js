import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'
import activiteSlice  from './activityslice'
import  participationSlice  from './participationSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    activite:activiteSlice,
    participation:participationSlice
  },
})