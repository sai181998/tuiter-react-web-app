import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">  
        <div class="col-12 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
            <!--<h3>Navigation Sidebar</h3>-->
            ${NavigationSidebar('explore')}
        </div>
        
        <div class="col-12 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
        <!--<h3>ExploreComponent</h3>-->
            ${ExploreComponent()}
        </div>
        

        <div class="col-12 d-none d-sm-none d-md-none d-lg-block col-xxl-4 col-xl-4 col-lg-4">
        <!--<h3>WhoToFollowList </h3>-->
        ${WhoToFollowList()}
        </div>
       </div>
     
    `);
 }
 
 $(exploreComponent);