const NavigationSidebar = (navigate) => {
    var homenavigate = ' ';
    var explorenavigate = ' ';
    var notificationnavigate = ' ';
    var messagenavigate = ' ';
    var bookmarknavigate = ' ';
    var listnavigate = ' ';
    var usernavigate = ' ';
    var morenavigate = ' ';
    var pagenotfound = ' ';
    if (navigate === 'bleh'){
        homenavigate='active';
    }
    else if(navigate === 'explore'){
        explorenavigate='active';
    }
    else if(navigate === 'notification'){
        notificationnavigate='active';
    }
    else if(navigate === 'message'){
        messagenavigate='active';
    }
    else if(navigate === 'bookmark'){
        bookmarknavigate='active';
    }
    else if(navigate === 'list'){
        listnavigate='active';
    }
    else if(navigate === 'user'){
        usernavigate='active';
    }
    else if(navigate === 'more'){
        morenavigate='active';
    }
    else {
        pagenotfound = ' ';
    }
    return(`
             <div class="list-group">
                <a class="list-group-item " href="/"><i class="fa-brands fa-twitter"></i>
                
                <a class="list-group-item ${homenavigate}" href="../HomeScreen/index.html">
                    <div class="d-flex align-items-center">
                        <div><i class="fa-solid fa-house"></i></div> 
                        <div class ="d-none d-xl-block ms-2 fw-bold">Home</div>
                    </div>
                </a>
                
                <a class="list-group-item ${explorenavigate}" href="../ExploreScreen/index.html">
                    <div class="d-flex align-items-center">
                        <div><i class="fa-solid fa-hashtag"></i></div> 
                        <div class ="d-none d-xl-block ms-2 fw-bold">Explore</div>
                    </div>
                </a>
                <a class="list-group-item ${notificationnavigate}" href="#">
                    <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-bell"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">Notifications</div>
                    </div>
                </a>
                <a class="list-group-item ${messagenavigate}" href="#">
                    <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-envelope"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">Messages</div>
                    </div>
                </a>
                <a class="list-group-item ${bookmarknavigate}" href="../bookmarks/index.html">
                    <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-bookmark"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">Bookmarks</div>
                    </div>
                </a>
                <a class="list-group-item ${listnavigate}" href="#">
                    <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-list"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">Lists</div>
                    </div>
                </a>
                <a class="list-group-item ${usernavigate}" href="#">
                    <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-user"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">Users</div>
                    </div>
                </a>
                <a class="list-group-item ${morenavigate}" href="#">
                    <div class="d-flex align-items-center">
                    <div><i class="fa-solid fa-circle-minus"></i></div> 
                    <div class ="d-none d-xl-block ms-2 fw-bold">More</div>
                    </div>
                </a>
             </div>
             

                <div class="d-grid mt-2">
                <a href="tweet.html"class="btn btn-primary btn-block rounded-pill">Tweet</a>
                </div>
    `);
   }
   export default NavigationSidebar;
   
   