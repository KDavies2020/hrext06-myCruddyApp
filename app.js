$(document).ready(function(){
  console.log('jQuery loaded');
  localStorage.clear();
  var storageArray = [];

  

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    // localStorage.setItem('inputFieldValue', $('.text-entry').val());
    // var myItemInStorage = localStorage.getItem('inputFieldValue');
    
  storageArray.push($('.text-entry').val())
  localStorage.setItem('inputFieldValue', storageArray);
  
  
  var myItemInStorage = localStorage.getItem('inputFieldValue');
  //storageArray.push(myItemInStorage);

  console.log('myItemInStorage', storageArray);

    
    $('.list-display-field').text(storageArray); // ??

  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    $('.list-display-field').html('');
    localStorage.clear();
  });

});