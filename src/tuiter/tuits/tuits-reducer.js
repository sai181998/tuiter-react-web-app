import { createSlice } from "@reduxjs/toolkit";
import tuit from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "NASA.webp",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   
const tuitsSlice = createSlice({
 name: 'tuit',
 initialState: tuit,
 reducers: { 
  ifLiked(state, action){
    const tuit = state.find((tuit) => tuit._id === action.payload);
    if (tuit.liked === true){
      tuit.liked = false;
      tuit.likes -=1;
    }
    else {
      tuit.liked = true;
      tuit.likes +=1;
    }
  },
  deleteTuit(state, action) {
    const index = state
       .findIndex(tuit =>
          tuit._id === action.payload);
    state.splice(index, 1);
  },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }
  }
 });
 
export const {createTuit, deleteTuit, ifLiked} = tuitsSlice.actions;
export default tuitsSlice.reducer;



