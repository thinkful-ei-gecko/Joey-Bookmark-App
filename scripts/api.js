'use strict';
/* global store, cuid */

const api = (function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joey/bookmarks';

  const listApiFetch = function(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

  function getItem() {
    return listApiFetch(`${BASE_URL}`)
      
    

  }

  function createItem(title, url, desc = 'none', rating) {
    const newItem = {
      title,
      url,
      desc,
      rating
    };
  

    return listApiFetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem)
    });
  }


  const updateItem = function(id, updateData) {
    const newData = JSON.stringify(updateData);
    return listApiFetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newData
    });
      
  };


  function deleteItem(id){
    return listApiFetch(
      `${BASE_URL}/${id}`, 
      {method : 'DELETE', 
        
      });
      
  }


  return {
    getItem,
    createItem,
    deleteItem,
    updateItem,
  };
}());