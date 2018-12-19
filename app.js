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
  $('.text-entry').val(createInputPrompts(placeholderValueQuestions))
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

  $('.btn-schedule').on('click', function(){
    $('.list-display-field').text(scheduler(storageArray))
  })

});