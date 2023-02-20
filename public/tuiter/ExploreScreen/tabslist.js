import TabsListItem from "./tabslistitem.js";

import tabs from "./tabs.js";

const TabsList = () => {
    return (`
            <ul class="nav nav-tabs">
            ${
                tabs.map(tab => {
                   return(TabsListItem(tab));
                }).join('')
             }
       
            </ul>
 `); }
 
 export default TabsList;