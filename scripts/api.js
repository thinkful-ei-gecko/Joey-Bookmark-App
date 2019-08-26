'use strict';
/* global store, cuid */
const api = (function(){
  const url = 'https://thinkful-list-api.herokuapp.com/joey/bookmarks';
  
  const getBookmarks = function(){
    return fetch(url);
  };
  const createBookmark = function(title, url){
    let newBookmark= JSON.stringify({
      id: cuid(),
      title,
      url,
    });
    return fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newBookmark
    } );
  };
  const deleteBookmark = function(id){
    return fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
  };
}());