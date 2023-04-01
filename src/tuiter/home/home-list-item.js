import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useDispatch} from "react-redux";
// import { deleteTuit} from "../tuits/tuits-reducer";
// import { ifLiked } from "../tuits/tuits-reducer";
import './home-list-item.css';
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const HomeListItem = 
(tuit    
   ) => { 
    const dispatch = useDispatch();
    // const deleteTuitHandler = (id) => {
    // dispatch(deleteTuit(id));
    // }
    const deleteTuitHandler = (id) => {
      dispatch(deleteTuitThunk(id));
    }
   
    //const toggleLikeHandler = (id) => {dispatch(ifLiked(id))}

    tuit = tuit.Tweet;
    return(
        <div className="container border-end border-start border-light">
        <div className="row border-bottom mb-3 border-light">
          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 mt-1">
            <img src={`/images/${tuit.image}`} width={40} className="rounded-circle"></img>
          </div>
          <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-10">
          <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
            <span className="fw-bold">{tuit.username} </span>
            <i className="fa-solid fa-circle-check" style={{color: '#008BED'}}></i>
            <span style={{ color: 'gray' }}> {tuit.handle} . {tuit.time}</span>
            <div>{tuit.tuit}</div>
            <br></br>
            <div className="row mb-3">
            <span href="#" className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <i className="bi bi-chat"></i>
                <span className="ms-2">{tuit.replies}</span>
            </span>
      
            <span href="#" className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className="fa fa-retweet" style={{color: '#4F5255'}}></i>
                <span className="ms-2">{tuit.retuits}</span>
            </span>
      
            <span href="#" className={`col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 ${tuit.liked ? 'clicked' : ''}`} onClick={() => dispatch(updateTuitThunk({...tuit,likes: tuit.likes + 1, liked: true}))}>
                <i className={`bi bi-heart ${tuit.liked ? 'clicked' : 'do '}`}></i>
                <span className="ms-2">{tuit.likes}</span>
            </span>

            <span href="#" className={`col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 ${tuit.disliked ? 'clicked' : ''}`} onClick={() => dispatch(updateTuitThunk({...tuit,dislikes: tuit.dislikes + 1}))}>
                <i className={`fa-solid fa-thumbs-down ${tuit.disliked ? 'clicked' : 'do '}`}></i>
                <span className="ms-2">{tuit.dislikes}</span>
            </span>
            
            <span href="#" className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <i class="bi bi-box-arrow-up"></i>
            </span>
            {/* toggleLikeHandler(tuit._id) */}
            </div>
          </div>
        </div>
      
      </div>
    );
   };
   export default HomeListItem;
   
   