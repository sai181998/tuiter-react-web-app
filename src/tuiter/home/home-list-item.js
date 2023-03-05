import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomeListItem = (
    {
      Tweet = {
        "profileName": "SpaceX",
        "handleName": "@SpaceX",
        "date": "23h",
        "contentbeforelink": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the moon",
        "Link": "spacex.com/updates",
        "contentafterlink": "",
        "profileImg": "elonmusk.jpg",
        "TweetImg": "inspiration4x.jpg",
        "TweetImgContentTitle": "",
        "TweetImgContent": "",
        "ProfileLink": "",
        "TweetLike": "595",
        "TweetShare": "1,168",
        "TweetLove": "11.5k",
        "icon": "",
        "border": "m-3"
      }
    }
   ) => {
    return(
        <div className="container border-end border-start border-light">
        <div className="row border-bottom mb-3 border-light">
          <div><i className="fa fa-retweet" style={{color: '#4F5255'}}></i> Elon Musk Retweeted</div>
          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 mt-1">
            <img src={`/images/${Tweet.profileImg}`} width={40} className="rounded-circle"></img>
          </div>
          <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-10">
            <span className="fw-bold">{Tweet.profileName} </span>
            <i className="fa-solid fa-circle-check" style={{color: '#008BED'}}></i>
            <span style={{ color: 'gray' }}> {Tweet.handleName} . {Tweet.date}</span>
            <div>{Tweet.contentbeforelink} <i class="fa-solid fa-arrow-right"></i><span className="text-primary">{Tweet.Link}</span><span> {Tweet.contentafterlink}</span></div>
            
            <img src={`${Tweet.TweetImg}`} style={{ width: '100%' }} className="rounded-3 border-bottom border-light mt-2" display={Tweet.displayimage}></img>
            
            <div>
                    <div className={`${Tweet.border}`}>
                    <div>{Tweet.TweetImgContentTitle}</div>
                    <div>{Tweet.TweetImgContent}</div>
                    <div><i className={`${Tweet.icon}`}></i>{Tweet.ProfileLink}</div>
                    </div>
            </div>
            <div className="row mb-3">
            <span href="#" className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className="bi bi-chat"></i>
                <span className="ms-2">{Tweet.TweetLike}</span>
            </span>
      
            <span href="#" className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className="fa fa-retweet" style={{color: '#4F5255'}}></i>
                <span className="ms-2">{Tweet.TweetShare}</span>
            </span>
      
            <span href="#" className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4">
                <i className="bi bi-heart"></i>
                <span className="ms-2">{Tweet.TweetLove}</span>
            </span>
      
            <span href="#" className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-2">
            <i class="bi bi-box-arrow-up"></i>
            </span>
      
            </div>
            <div className="mb-2" style={{color: '#008BED'}}>Show this thread</div>
          </div>
        </div>
      
      </div>
    );
   };
   export default HomeListItem;
   
   