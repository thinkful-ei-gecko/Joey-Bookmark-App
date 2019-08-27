'use strict';
$(document).ready(function(){
  bookmarks.bindEvent();
  api.getItem()
    .then((items)=>{
      items.forEach( item => STORE.addItem(item));
      bookmarks.renderList();
    });
});

