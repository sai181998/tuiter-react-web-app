const TabsListItem = (tab) => {
    return(`
    <li class="nav-item">
                    <a class="nav-link ${tab.active}" href="${tab.link}" >${tab.tabname}</a>
    </li>
    `);
}
export default TabsListItem;