$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    // localStorage.setItem('inputFieldValue', $('.text-entry').val());
    // var myItemInStorage = localStorage.getItem('inputFieldValue');
    if(localStorage.length === undefined){
  localStorage.setItem('inputFieldValue', $('.text-entry').val());
} else{ localStorage['inputFieldValue'] = [localStorage['inputFieldValue']].concat($('.text-entry').val());

    var myItemInStorage = localStorage.getItem('inputFieldValue');
}
    //console.log(localStorage.length)
    console.log('myItemInStorage', myItemInStorage);

    // display the value here
    $('.list-display-field').text(myItemInStorage.slice(9)); // ??

  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    $('.list-display-field').html('');
    localStorage.clear();
  });

});