import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const RetweetListItem = (
    {
      ReTweet = {
        "_id": 1,
        "profileName": "Elon Musk",
        "handleName": "@elonmusk",
        "date": "15h",
        "contentbeforelink": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere",
        "Link": "",
        "contentafterlink": "",
        "profileImg": "elonmusk.jpg",
        "ProfileLink": "",
        "RetweetprofileName": "SpaceX",
        "RetweethandleName": "@SpaceX",
        "Retweetdate": "16h",
        "Retweetcontentbeforelink": "Starlink for RV's now has over 100,00 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage",
        "RetweetLink": "starlink.com/rv",
        "Retweetcontentafterlink": "",
        "RetweetprofileImg": "elonmusk.jpg",
        "RetweetProfileLink": "",
        "TweetLike": "5,346",
        "TweetShare": "1,601",
        "TweetLove": "19.2k",
        "icon": "",
        "border": "m-3"
      }
    }
   ) => {
    return(
        <div className="container border-end border-start border-light">
        <div className="row border-bottom mb-3 border-light">
          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 mt-1">
            <img src={`/images/${ReTweet.profileImg}`} width={40} className="rounded-circle"></img>
          </div>
          <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-10 pl-2">
            <span className="fw-bold">{ReTweet.profileName} </span>
            <i className="fa-solid fa-circle-check" style={{color: '#008BED'}}></i>
            <span style={{ color: 'gray' }}> {ReTweet.handleName} . {ReTweet.date}</span>
            <div>{ReTweet.contentbeforelink} <span className="text-primary">{ReTweet.Link}</span><span> {ReTweet.contentafterlink}</span></div>
            
            <div className="mt-2 mb-1 border rounded p-2" style={{ border: '1px solid grey' }}>
            <div>
            <img src={`/images/${ReTweet.profileImg}`} width={25} className="rounded-circle"></img>
            <span className="fw-bold pr-1"> {ReTweet.RetweetprofileName} </span>
            <i className="fa-solid fa-circle-check " style={{color: '#008BED'}}></i>
            <span style={{ color: 'gray' }}> {ReTweet.RetweethandleName} . {ReTweet.Retweetdate}</span>
            </div>
            <div>{ReTweet.Retweetcontentbeforelink} <i class="fa-solid fa-arrow-right"></i> <span className="text-primary">{ReTweet.RetweetLink}</span><span> {ReTweet.Retweetcontentafterlink}</span></div>
            
            </div>
            

            <div className="row mb-3 mt-2">
            <span href="#" className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className="bi bi-chat"></i>
                <span className="ms-2">{ReTweet.TweetLike}</span>
            </span>
      
            <span href="#" className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className="fa fa-retweet" style={{color: '#4F5255'}}></i>
                <span className="ms-2">{ReTweet.TweetShare}</span>
            </span>
      
            <span href="#" className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4">
                <i className="bi bi-heart"></i>
                <span className="ms-2">{ReTweet.TweetLove}</span>
            </span>
      
            <span href="#" className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-2">
            <i class="bi bi-box-arrow-up"></i>
            </span>
      
            </div>
          </div>
        </div>
      
      </div>
    );
   };
   export default RetweetListItem;
   
   