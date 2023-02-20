const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item ">
    <div class="d-flex align-items-center">
        <img src="${who.avatarIcon}" width="30" class="rounded-circle">
        <div class="d-flex flex-column ms-2">
            <div class="fw-bold">${who.userName} <i class="fa-solid fa-circle-check"></i></div>
        <div>@${who.handle}</div>
    </div>
    <div class="ms-auto">
    <button type="button" class="btn btn-primary rounded-pill">Follow</button>
    </div>
    </li>
`);
}
export default WhoToFollowListItem;