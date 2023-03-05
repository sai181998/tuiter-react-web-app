import React from "react";
import tweets from './homes.json';
import HomeListItem from "./home-list-item";
import RetweetListItem from "./retweet-list-item";
import retweets from './retweet.json';

const HomeComponent = () => {
 return(
        <ul className="nav nav-tabs">
             {   tweets.map(Tweet => 
                  <HomeListItem
                  key={Tweet._id} Tweet={Tweet}/>)
             }
             {   retweets.map(ReTweet => 
             <RetweetListItem
             key={ReTweet._id} ReTweet={ReTweet}/>)
        }
        </ul>
        
 );
};
export default HomeComponent;


