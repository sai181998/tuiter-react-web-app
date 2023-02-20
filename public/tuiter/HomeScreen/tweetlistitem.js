const TweetListItem = (Tweet) => {
    return(`
    <div class="container border-end border-start border-light">
    <div class="row border-bottom mb-3 border-light">
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1">
        <img src="${Tweet.profileImg}" style="max-width: 100%;" class="rounded-circle">
      </div>
      <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10">
        <span class=" fw-bold text-white">${Tweet.profileName} <i class="fa-solid fa-circle-check"></i></span>
        <span>${Tweet.handleName} . ${Tweet.date}</span>
        <div class="text-white">${Tweet.contentbeforelink} <span class="text-primary">${Tweet.Link}</span><span> ${Tweet.contentafterlink}</span></div>
        
        <div class="mt-2 mb-2 border rounded border-light">

                <img src="${Tweet.TweetImg}" style="max-width: 100%;" class="rounded-3 border-bottom border-light">
                <div class="${Tweet.border}">
                <div class="text-white">${Tweet.TweetImgContentTitle}</div>
                <div>${Tweet.TweetImgContent}</div>
                <div><i class="${Tweet.icon}"></i>${Tweet.ProfileLink}</div>
                </div>
        </div>
        <div class="row mb-3">
        <span href="#" class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <i class="fa-regular fa-comment"></i>
            <span class="ms-2">${Tweet.TweetLike}</span>
        </span>
  
        <span href="#" class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <i class="fa fa-retweet"></i>
            <span class="ms-2">${Tweet.TweetShare}</span>
        </span>
  
        <span href="#" class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4">
            <i class="fa fa-heart"></i>
            <span class="ms-2">${Tweet.TweetLove}</span>
        </span>
  
        <span href="#" class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-2">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </span>
  
        </div>
      </div>
    </div>
  
  </div>
    `);
}
export default TweetListItem;