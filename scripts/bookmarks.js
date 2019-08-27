'use strict';
const bookmarks = (function(){
  function generateError(message) {
    return `
      <section class="error-content">
        <button id="cancel-error">X</button>
        <p>${message}</p>
      </section>
    `;
  }
  function renderError() {
    if (STORE.error) {
      const el = generateError(STORE.error);
      $('.error-container').html(el);
    } else {
      $('.error-container').empty();
    }
  }


  const renderList = function(){
    renderError();
    //loop through list and render it
    let items = STORE.items;
    $('.bookmarks-list').empty();
    for(let i = 0; i < items.length; i++){
      if(items[i].visible === false){
        continue;
      }
      if(items[i].expanded === false){
        $('.bookmarks-list').append(generateItemElement(items[i]));
      }
      else {
        $('.bookmarks-list').append(generateExpanded(items[i])); 
      }

    }
  };

  function generateItemElement(bookmark){
    return `<li class="js-bookmark-entry" data-bookmark-id=${bookmark.id}>
    <form class="js-bookmark-entry-form">
        <label for="bookmark-entry-form">${bookmark.title}</label>
        <h5>rating: ${bookmark.rating}</h5>
        <button type="button" class="detailed-view-button">details</button>
        <button type="button" class="delete-button">delete</button>
    </form>
    </li>`;
  }
  function generateExpanded(bookmark){
    return `<li class="js-bookmark-entry" data-bookmark-id=${bookmark.id}>
    <form class="js-bookmark-entry-form">
        <label for="bookmark-entry-form">${bookmark.title}</label>
        <h5>rating: ${bookmark.rating}</h5>
        <a href="${bookmark.url}">Visit Website</a>
        <h5>Description:</h5>
        <p>${bookmark.desc}</p>
        <button type="button" class="detailed-view-button">hide details</button>
        
    </form>
    </li>`;
  }
  
  function handleBookmarkCreate(){
    $('.js-bookmark-entry-form').on('submit',function(event){
      event.preventDefault();
      let title = $('.js-title-entry').val();
      let url = $('.js-url-entry').val();
      let rating = $('.js-rating-input').val();
      let description = $('.js-descript-input').val();
      api.createItem(title,url,description,rating)
        .then(res => {
          STORE.addItem(res);
          renderList();
        })
        .catch((err) => {
          STORE.setError(err.message);
          renderError(); });
    });}

  function getItemIdFromElement(item) {
    return $(item)
      .closest('.js-bookmark-entry')
      .data('bookmark-id');
  }
  function handleDeleteBookmark(){
    $('.bookmarks-list').on('click', '.delete-button', event =>{
      const id = getItemIdFromElement(event.currentTarget);
      api.deleteItem(id)
        .then(res =>{
          console.log(res);
          STORE.findAndDelete(id);
          renderList();
        })
        .catch((err) => {
          STORE.setError(err.message);
          renderError(); });
    });
  }

  function handleExpandItem(){
    $('.bookmarks-list').on('click', '.detailed-view-button', event =>{
      const id = getItemIdFromElement(event.currentTarget);
      const item = STORE.items.find(item => item.id === id); 
      Object.assign(item, {expanded: !item.expanded});
      renderList();
      
      
    } ); 
  }
  
  function handleFilter(){
    $('.js-rating-filter').on('submit', event =>{
      event.preventDefault();
      console.log('filter');
      const rating = $('select').val();
      STORE.filterRating(rating);
      renderList();
    });
  }
  
    
  
  function bindEvent(){
    handleBookmarkCreate();
    handleDeleteBookmark();
    handleExpandItem(); 
    handleFilter();
  }

  return{
    bindEvent,
    handleBookmarkCreate,
    renderList,
  };
 
}());