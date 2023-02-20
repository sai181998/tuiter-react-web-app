import TweetList from "./tweetlist.js";

const HomeComponent = () => {
    return(`
            
           <ul class="nav mb-2 nav-tabs">
                    ${TweetList()}
           </ul>
           
    `);
}
export default HomeComponent;
