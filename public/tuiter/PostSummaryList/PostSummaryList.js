import PostSummaryItem from "./PostSummaryItem.js";

import Posts from "./Posts.js";

const PostSummaryList = () => {
    return (`
            <ul class="list-group">
            ${
                Posts.map(Post => {
                   return(PostSummaryItem(Post));
                }).join('')
             }
       
            </ul>
 `); }
 
 export default PostSummaryList;