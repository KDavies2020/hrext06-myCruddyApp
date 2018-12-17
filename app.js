$(document).ready(function(){
  console.log('jQuery loaded');
  $('.list-display-field').html('');
  localStorage.clear();
  console.log(localStorage.length)

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    // localStorage.setItem('inputFieldValue', $('.text-entry').val());
    // var myItemInStorage = localStorage.getItem('inputFieldValue');
    if(localStorage.length === 0){
  localStorage.setItem('inputFieldValue', $('.text-entry').val());
  var myItemInStorage = localStorage.getItem('inputFieldValue');
} else{ localStorage['inputFieldValue'] += ($('.text-entry').val());

    var myItemInStorage = localStorage.getItem('inputFieldValue');
}
    //console.log(localStorage.length)
    console.log('myItemInStorage', myItemInStorage);

    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??
console.log(typeof localStorage)
  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    $('.list-display-field').html('');
    localStorage.clear();
  });

});