import { combineReducers } from '@reduxjs/toolkit';
import storePostsInfo from 'store/reduxSlice/postsInfo';




const reducer = combineReducers({
  storePosts:storePostsInfo.reducer
  });

  export default reducer