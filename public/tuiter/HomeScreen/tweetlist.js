import TweetListItem from "./tweetlistitem.js";

import tweets from "./tweets.js";

const TweetList = () => {
    return (`
            <ul class="nav nav-tabs">
            ${
                tweets.map(tweet => {
                   return(TweetListItem(tweet));
                }).join('')
             }
       
            </ul>
 `); }
 
 export default TweetList;