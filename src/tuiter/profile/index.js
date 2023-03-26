import React from "react";
import ProfileListItem from "./profile-summary-item";
import { useSelector } from "react-redux";

const ProfileComponent = () => {
     const profileArray = useSelector((state) => state.Profile)
 return(
     <>
                  <ProfileListItem Profile={profileArray}/>  
        </>   
 );
};
export default ProfileComponent;