'use strict';
/* global store, cuid */

const api = (function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joey/bookmarks';

  function getItem() {
    return fetch(`${BASE_URL}`)
      .then(res => res.json());
    

  }

  function createItem(title, url, desc = 'none', rating) {
    const newItem = {
      title,
      url,
      desc,
      rating
    };
  

    return fetch(BASE_URL, {
    
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem)
    })
      .then(response => response.json());
  }

  

  

  function deleteItem(id, updateData){
    return fetch(
      `${BASE_URL}/${id}`, 
      {method : 'DELETE', 
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(updateData)
      });}


  return {
    getItem,
    createItem,
    deleteItem
  };
}());