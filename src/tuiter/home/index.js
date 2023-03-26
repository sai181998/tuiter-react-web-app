import React from "react";
import HomeListItem from "./home-list-item";
import { useSelector } from "react-redux";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
     const tuit = useSelector(state => state.tuit)
 return(
     <>
        <WhatsHappening/>
        <ul className="nav nav-tabs">
             {   tuit.map(tuit => 
                  <HomeListItem
                  key={tuit._id} Tweet={tuit}/>)
             }
        </ul>
        </>   
 );
};
export default HomeComponent;


