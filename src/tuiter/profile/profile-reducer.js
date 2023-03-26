import { createSlice } from "@reduxjs/toolkit";
import profileArray from "./Profile.json";

const templateProfile = {
  "FirstName": "Sathyanarayan",
  "lastName": "Sairam",
  "tweets": 6114,
  "coverimage": "coverimage.jpg",
  "ProfileImage": "spacex.jpg",
  "handle": "@aomine",
  "description": "Student, Cybersecurity Analyst, Basketball fanatic, Bookworm, Origamist. Retweets and likes are not endorsements",
  "website": "",
  "location":"Boston, MA",
  "born": "14th March 1993",
  "joined":"June 2010",
  "following": 340,
  "followers": 223
  }
  
const profileSlice = createSlice({
 name: "profile",
 initialState: profileArray[0],
 reducers: {
    updateProfile(state, action) {
      return {
        ...state,
        ...action.payload
    };
    }
  }
 
});

export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;
 