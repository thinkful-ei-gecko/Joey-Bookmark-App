'use strict';
let STORE =(function(){
  const addItem = function (object) {
    this.items.push(object);
  };
    
  const findById = function (id) {
    return this.items.find(item => item.id === id);
  };
    
  const findAndDelete = function (id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const renderList = function(){
    //loop through list and render it
    let items = STORE.items;
    for(let i = 0; i < items.length; i++){
      $('.bookmarks-list').append(generateItemElement(items[i]));
    }
    
  };
  const setError = function(error) {
    this.error=error;
  };
  function generateItemElement(bookmark){
    return `<li class="js-bookmark-entry" bookmark-id=${bookmark.id}>
    <form class="js-bookmark-entry-form">
        <label for="bookmark-entry-form">${bookmark.title}</label>
        <h5>rating: ${bookmark.rating}</h5>
        <a href="${bookmark.url}">Visit Website</a>
        <h5>Description:</h5>
        <p>${bookmark.desc}</p>
        <button type="button" class="detailed-view-button">details</button>
        <button type="button" class="delete-button">delete</button>
    </form>
    </li>`;
  }

  function generateDetails(bookmark){
    return `<a href="${bookmark.url}">Visit Website</a>
        <h5>Description:</h5>
        <p>${bookmark.desc}</p>
        <button type="submit" class="detailed-view-button">details</button>
        <button type="submit" class="delete-button">delete</button>`;
  }
  return {
    items: [],
    addItem,
    findById,
    findAndDelete,
    renderList,
    generateItemElement,
    setError,
    generateDetails,
  };

}())
;