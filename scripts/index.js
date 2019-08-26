'use strict';
$(document).ready(function(){
  
  api.getItem()
    .then((items)=>{
      items.forEach( item => STORE.addItem(item));
      STORE.renderList();
    });
});

function displayBookmarks(){
  bookmarks.handleBookmarkCreate();
  api.getItem()
    .then(items => {
      console.log(items);
    });
}

$(displayBookmarks);
