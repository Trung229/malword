import { createSlice } from '@reduxjs/toolkit'

export const mangaModel = createSlice({
    name: 'manga',
    initialState: {
      data:{},
    },
    reducers: {
      saveData: (state, action) => {
          return {
            ...state,
            data:{
               payload: action.payload,
            }
          }
      }
    }
  })

export default mangaModel.reducer
  