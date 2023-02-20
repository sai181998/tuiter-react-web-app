import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import TabsList from "./tabslist.js";

const ExploreComponent = () => {
    return(`
            
            <div class="d-flex justify-content-between">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
              <input type="text" class="rounded-pill form-control" placeholder="Search Twitter" id="search">
              <div>
                <button class="btn btn-lg" id="settingsbutton" type="button">
                  <i class="fa-solid fa-gear"></i>
                </button>
              </div>
            </div>
    
           </div>

           <ul class="nav mb-2 nav-tabs">
                    ${TabsList()}
           </ul>

           <!-- image with overlaid text -->
           <div class="card text-white align-text-bottom mt-2">
           <img src="../../images/spacexstarship.webp" class="card-img">
           <div class="card-img-overlay d-flex align-items-end">
           <h3 class="card-title fw-bold">SpaceX's Starship</h3>
           </div>
           </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
