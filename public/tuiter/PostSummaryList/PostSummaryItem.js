const PostSummaryItem = (Post) => {
    return(`
    <li class="list-group-item">
            <div class="d-flex justify-content-between">
            <div>
            <div class="text-secondary">${Post.topic}</div>
            <div>
                <span class="fw-bold">${Post.userName} <i class="fa-solid fa-circle-check"></i></span>
                <span class="text-secondary">-${Post.time}</span>
            </div>
            <div>
                <span class="fw-bold">${Post.title}</span>
            </div>
            <span class="text-secondary">${Post.tweets}</span>        
            </div>
            <div>
                <img src="${Post.image}" class="float-end rounded" width="90px">
            </div>
        </div>
    </li>
                
`);
}

export default PostSummaryItem;