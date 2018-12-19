$(document).ready(function(){
  console.log('jQuery loaded');
  localStorage.clear();
  var storageArray = [];


  // write to local storage from input when button save clicked
  //save in array to access all inputs
  $('.btn-submit').on('click', function(){

  storageArray.push($('.text-entry').val())
  localStorage.setItem('inputFieldValue', storageArray)
  $('.list-display-field').text(storageArray);
  $('.text-entry').val(placeholderValueQuestions[0]);
  placeholderValueQuestions.slice(1);

  // having trouble looping through and pushing that loop into our placeholder value.

  //line above will be used to clear out previous search and add new placeholder with instructions for next user input.

  });
  //button to undo previous input
  $(".btn-undo").on('click', function(){
    storageArray = storageArray.splice(0, storageArray.length-1);
    localStorage.setItem('inputFieldValue', storageArray)
  })
  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    $('.list-display-field').html('');
    localStorage.clear();
  });

});