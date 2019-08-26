'use strict';
const bookmarks = (function(){
  
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
          STORE.renderList();
        }); 
    });}

  function getItemIdFromElement(item) {
    return $(item)
      .closest('.js-bookmark-entry')
      .data('bookmark-id');
  }
  function handleDeleteBookmark(){
    $('.js-bookmark-entry-form').on('click', '.delete-button', event =>{
      const id = getItemIdFromElement(event.currentTarget);
      api.deleteItem(id)
        .then(res =>{
          if(res.ok){
            STORE.findAndDelete(id);
            STORE.renderList();
          }
        })
        .catch(err=>{
          STORE.setError(err.message);
        });
    });
  }
  function detailedView(){
    $('.js-bookmark-entry-form').on('click', '.detailed-view-button', event =>{
      event.preventDefault();
      $('js-bookmark-entry-form').append(
        `<a href="${bookmark.url}">Visit Website</a>
        <h5>Description:</h5>
        <p>${bookmark.desc}</p>
        <button type="submit" class="detailed-view-button">details</button>
        <button type="submit" class="delete-button">delete</button>`
      );
    
    });}
    
  
  function bindEvent(){
    handleBookmarkCreate();
    handleDeleteBookmark();
    detailedView();
  }

  return{
    bindEvent,
    handleBookmarkCreate,
  };
 
}());