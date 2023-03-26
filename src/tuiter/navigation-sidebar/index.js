import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import '@fortawesome/fontawesome-free/css/all.min.css';


const NavigationSidebar = () => 
 {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
 return (
   <div className="list-group">
    <li className="list-group-item">
      <i className="fa-brands fa-twitter"></i>
    </li>
     <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
     <div class="d-flex align-items-center">
        <div><i class="fa-solid fa-house"></i></div> 
        <div class ="d-none d-xl-block ms-2 fw-bold">Home</div>
      </div>
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
     <div class="d-flex align-items-center">
                        <div><i class="fa-solid fa-hashtag"></i></div> 
                        <div class ="d-none d-xl-block ms-2 fw-bold">Explore</div>
                    </div>
     </Link>
     <Link to="/" className="list-group-item">
     <div class="d-flex align-items-center">
                        <div><i class="fa-solid fa-tag"></i></div> 
                        <div class ="d-none d-xl-block ms-2 fw-bold">Labs</div>
                    </div>
     </Link>
     <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
     <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-bell"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">Notifications</div>
                    </div>
     </Link>
     <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
     <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-envelope"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">Messages</div>
                    </div>
     </Link>
     <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
     <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-bookmark"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">Bookmarks</div>
                    </div>
     </Link>
     <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
     <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-list"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">Lists</div>
                    </div>
     </Link>
     <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
     <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-user"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">Profile</div>
                    </div>
     
     </Link>   
     <a className={`list-group-item ${active === 'more'?'active':''}`}>
     <div class="d-flex align-items-center">
                        <div><i class="fa-solid fa-circle-minus"></i></div> 
                        <div class ="d-none d-xl-block ms-2 fw-bold">More</div>
                    </div>
     
     </a>

     <div className="d-grid mt-2">
        <a className="btn btn-primary btn-block rounded-pill">Tweet</a>
      </div>
  </div>
);
};
export default NavigationSidebar;



