import { createSlice } from '@reduxjs/toolkit'

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState: {
    value: null,
  },
  reducers: {
    setCharacter: (state, action) => { state.value = action.payload },
    clearCharacter: (state) => { state.value = null }
  },
})

export const { setCharacter, clearCharacter } = characterSlice.actions

export default characterSlice.reducer