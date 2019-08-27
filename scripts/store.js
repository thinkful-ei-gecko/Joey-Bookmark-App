'use strict';
let STORE =(function(){
  const addItem = function (object) {
    object.expanded = false;
    console.log(object);
    this.items.push(object);
  };
    
  const findById = function (id) {
    return this.items.find(item => item.id === id);
  };
    
  const findAndDelete = function (id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const toggleExpandFilter = function() {
    this.expanded = !this.expanded;
  };
  const findAndUpdate = function(id, newData) {
    const item = this.findById(id);
    Object.assign(item, newData);
  };

  
    
  
  const setError = function(error) {
    this.error=error;
  };
  
  
  
  return {
    items: [],
    filter: 1,
    addItem,
    findById,
    findAndDelete,
    
   
    setError,
    toggleExpandFilter,
    findAndUpdate,
    
   
  };

}())
;