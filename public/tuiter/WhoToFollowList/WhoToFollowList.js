import WhoToFollowListItem from "./WhoToFollowListItem.js";

import whos from "./whos.js";

const WhoToFollowList = () => {
    return (`
            <ul class="list-group d-none d-lg-block">
            <li class="list-group-item fw-bold">Who to follow</li> 
            ${
                whos.map(who => {
                   return(WhoToFollowListItem(who));
                }).join('')
             }
       
            </ul>
 `); }
 
 export default WhoToFollowList;