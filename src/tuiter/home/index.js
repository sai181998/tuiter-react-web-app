import React, {useEffect} from "react";
import HomeListItem from "./home-list-item";
import {useDispatch, useSelector } from "react-redux";
import WhatsHappening from "./whats-happening";
import {findTuitsThunk}  from "../../services/tuits-thunks";


const HomeComponent = () => {
     const {tuits, loading} = useSelector(state => state.tuitsData)
     
     const dispatch = useDispatch();
     useEffect(() => {
       dispatch(findTuitsThunk())
     }, [])
 return(
     <>
        <WhatsHappening/>
        <ul className="na nav-tabs">
               {
               loading &&
               <li className="list-group-item">
               Loading...
               </li>
              }

             {   tuits.map(tuit => 
                  <HomeListItem
                  key={tuit._id} Tweet={tuit}/>)
             }
        </ul>
        </>   
 );
};
export default HomeComponent;


