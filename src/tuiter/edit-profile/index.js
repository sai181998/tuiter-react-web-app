import React from "react";
import EditProfileListItem from "./editprofile-summary-item";
import { useSelector } from "react-redux";

const EditProfileComponent = () => {
     const EditprofileArray = useSelector((state) => state.Profile)

 return(
     <>
                  <EditProfileListItem Profile={EditprofileArray}/>      
        </>   
 );
};
export default EditProfileComponent;