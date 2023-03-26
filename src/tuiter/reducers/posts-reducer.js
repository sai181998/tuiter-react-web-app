import { createSlice } from "@reduxjs/toolkit";
import postsArray from '../data/posts.json';

const postsSlice = createSlice({
 name: 'post',
 initialState: postsArray
});

export default postsSlice.reducer;