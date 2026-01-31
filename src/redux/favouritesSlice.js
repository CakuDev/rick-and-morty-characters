import { createSlice } from '@reduxjs/toolkit'

export const favouritesSlice = createSlice({
  name: 'favouritesSlice',
  initialState: {
    value: [],
  },
  reducers: {
    addCharacter: (state, action) => {state.value.push(action.payload)},
    removeCharacter: (state, action) => {state.value = state.value.filter(c => c.id != action.payload.id)},
  },
})

export const { addCharacter, removeCharacter } = favouritesSlice.actions

export default favouritesSlice.reducer