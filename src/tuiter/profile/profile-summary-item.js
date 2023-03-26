import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const ProfileListItem = 
(
   Profiles
   ) => {
      const Profile = Profiles.Profile;
    return(
        <div className="container border-end border-start border-light">
        <div className="row border-bottom mb-3 border-light">
          <div>
          <div className="d-flex align-items-center">
                <div><i class="fa-solid fa-arrow-left"></i></div>
          <div className="px-5">
                <div className="fw-bold">{Profile.FirstName} {Profile.lastName}</div>
                <div className="text-secondary">{Profile.tweets} Tweets</div>
          </div> 
          </div> 
           <div style={{ position: 'relative', width: '100%' }}>
                <img style={{ width: '100%' }} src={`/images/${Profile.coverimage}`}/>
                <img src={`/images/${Profile.ProfileImage}`} alt="your-profile-picture-description" style={{position: 'absolute', top: '45%',left: '3%',transform: 'translateY(50%)',width: '100px',height: '100px',borderRadius: '50%'}}/>
          </div>
          <div className="text-decoration-none">
            <button className="btn rounded-pill float-end border fw-bold mt-1"><Link to="/tuiter/edit-profile" style={{ textDecoration: 'none', color: 'black' }}>Edit Profile</Link></button>
          </div>
          <div className="mt-5">
                <div className="fw-bold">{Profile.FirstName} {Profile.lastName}</div>
                <div className="text-secondary">{Profile.handle}</div>
                <div className="mt-2">{Profile.description}</div>
          </div>
          <div>
            <div>{Profile.website}</div>
          </div>
          <div className="mt-2 text-secondary d-flex justify-content">
            <div ><i class="fa-solid fa-location-dot"></i> {Profile.location}</div>
            <div className="ps-3" > <i class="fa-solid fa-cake-candles"></i> Born {Profile.born}</div>
            <div className="ps-3"><i class="fa-solid fa-calendar-days"></i> Joined {Profile.joined}</div>
          </div>
          <div className="mt-2">
                <span className="fw-bold">{Profile.following} </span>Following
                <span className="fw-bold ps-3">{Profile.followers} </span>Followers
          </div>  
         </div>
        </div>
    </div>
      
    );
   };
   export default ProfileListItem;
   
   