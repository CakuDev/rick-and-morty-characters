import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './characterSlice'
import favouritesReducer from './favouritesSlice'

export default configureStore({
  reducer: {
    character: characterReducer,
    favourites: favouritesReducer
  },
})