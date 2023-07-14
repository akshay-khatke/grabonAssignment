import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from 'store/reduxState'


export const storePostsInfo = createSlice({
  name: 'storePosts',
  initialState,
  reducers: {
    addStoreInfo: (state,action: PayloadAction<any>) => {
      // console.log(action,"check action")
      state.posts = action.payload
      return state
    },
  },
})

export const {  addStoreInfo } = storePostsInfo.actions

export default storePostsInfo
