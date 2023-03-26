import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useDispatch} from "react-redux";
import { useState } from 'react';
import {updateProfile} from "../profile/profile-reducer";
import { useNavigate } from "react-router";


const EditProfileListItem = (Profile) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Editprofile, EditsetProfile] = useState(Profile.Profile);
  

    const handleInputChange = (event) => {
      const { id, value } = event.target;
      EditsetProfile((Editprofile) => ({
        ...Editprofile,
        [id]: value
      }));
    };
    
    const onSave = () => {
      console.log(Editprofile);
      dispatch(updateProfile(Editprofile));
      navigate(-1)
    }


    return(
        <div className="container border-end border-start border-light">
        <div className="row border-bottom mb-3 border-light">
          <div>
          <div className="d-flex align-items-center">
          <button type="button" onClick={() => navigate(-1)} style={{backgroundColor: 'transparent', border: 'none'}}><i className="bi bi-x-lg"></i></button>
          <div className="px-3">
                <div className="fw-bold">Edit Profile</div>
          </div>
          <div className="ms-auto"><button className="btn btn-primary rounded-pill float-end" type="submit" onClick={onSave} style={{backgroundColor: 'black', color: 'white', border: 'none', fontSize: '15px', fontWeight: 'bold', borderRadius: '20px', padding: '5px'}}>Save</button></div>
          </div> 
           <div className="mt-2" style={{ position: 'relative', width: '100%'  }}>
                <img style={{ width: '100%'}} src={`/images/${Editprofile.coverimage}`}/>
                <img src={`/images/${Editprofile.ProfileImage}`} style={{position: 'absolute', top: '45%',left: '3%',transform: 'translateY(50%)',width: '100px',height: '100px',borderRadius: '50%'}}/>
          </div>
          <div className="mt-5">
                <div style={{position: 'relative'}}>
                    <label htmlFor="name" style={{position: 'absolute', top: '0px', backgroundColor: 'transparent', padding: '3px 0px 0px 6px', color: 'grey', fontSize: '13px'}}>First Name</label>
                    <input type="text" id="FirstName" name="name" onChange={handleInputChange} style={{ width: '100%', left: '10px', borderRadius: '5px', border: '1.5px solid #E9EEF0', padding: '20px 0px 3px 6px'}} value={Editprofile.FirstName}/>
                </div>

                <div style={{position: 'relative'}} className="mt-4">
                    <label htmlFor="name" style={{position: 'absolute', top: '0px', backgroundColor: 'transparent', padding: '3px 0px 0px 6px',color: 'grey', fontSize: '13px'}}>Last Name</label>
                    <input type="text" id="lastName" name="name" onChange={handleInputChange} style={{ width: '100%', left: '10px', borderRadius: '5px', border: '1.5px solid #E9EEF0', padding: '20px 0px 3px 6px'}} value={Editprofile.lastName}/>
                </div>

                <div style={{position: 'relative'}} className="mt-4">
                    <label htmlFor="name" style={{position: 'absolute', top: '0px', backgroundColor: 'transparent', padding: '3px 0px 0px 6px', color: 'grey', fontSize: '13px'}}>Bio</label>
                    <input type="text" id="description" name="bio" value={Editprofile.description} onChange={handleInputChange} style={{ width: '100%', left: '10px', borderRadius: '5px', border: '1.5px solid #E9EEF0', padding: '20px 0px 3px 6px'}}/>
                </div>

                <div style={{position: 'relative'}} className="mt-4">
                    <label htmlFor="name" style={{position: 'absolute', top: '0px', backgroundColor: 'transparent', padding: '3px 0px 0px 6px', color: 'grey', fontSize: '13px'}}>Location</label>
                    <input type="text" id="location" name="location" value={Editprofile.location} onChange={handleInputChange} style={{ width: '100%', left: '10px', borderRadius: '5px', border: '1.5px solid #E9EEF0', padding: '20px 0px 3px 6px'}} />
                </div>

                <div style={{position: 'relative'}} className="mt-4">
                    <label htmlFor="name" style={{position: 'absolute', top: '0px', backgroundColor: 'transparent', padding: '3px 0px 0px 6px', color: 'grey', fontSize: '13px'}}>Website</label>
                    <input type="text" id="website" name="website" value={Editprofile.website} onChange={handleInputChange} style={{ width: '100%', left: '10px', borderRadius: '5px', border: '1.5px solid #E9EEF0', padding: '20px 0px 3px 6px'}}/>
                </div>

                <div style={{position: 'relative'}} className="mt-4">
                    <label htmlFor="name" style={{position: 'absolute', top: '0px', backgroundColor: 'transparent', padding: '3px 0px 0px 6px', color: 'grey', fontSize: '13px'}}>Birthdate . <span style={{color:'#4BAFF2'}}>Edit</span></label>
                    <input type="date" id="born" name="birthdate" value={Editprofile.born} onChange={handleInputChange} style={{ width: '100%', left: '10px', borderRadius: '5px', border: '1.5px solid #E9EEF0', padding: '20px 0px 3px 6px'}}/>
                </div>
            <div className="d-flex justify-content-between mt-4"> 
            <div>Switch to professional</div>
            <div><i class="fa-solid fa-greater-than"></i></div>
            </div>  
         </div>
        </div>
    </div>
    </div>
      
    );
   };
   export default EditProfileListItem;
   
   