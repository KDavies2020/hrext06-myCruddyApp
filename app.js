$(document).ready(function(){
  console.log('jQuery loaded');
  localStorage.clear();
  var storageArray = [];
  $('.text-entry').val(placeholderValueQuestions[0]);


  // write to local storage from input when button save clicked
  //save in array to access all inputs
  $('.btn-next').on('click', function(){
  storageArray.push($('.text-entry').val())
  localStorage.setItem('inputFieldValue', storageArray)
  $('.text-entry').val(createInputPrompts(placeholderValueQuestions))
  });

  //button to undo previous input
  $(".btn-undo").on('click', function(){
    storageArray = storageArray.splice(0, storageArray.length-1);
    localStorage.setItem('inputFieldValue', storageArray);

  })


  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    $('.list-display-field').html('');
    localStorage.clear();
  });
  //when we are done with inputs, our schedule button will clear the holder text in the display field, and display newly scheduled games.
   $('.btn-schedule').one('click', function(){
    $('.list-display-field').text('')
  })
  $('.btn-schedule').on('click', function(){
    $('.list-display-field').prepend(`<div class = "scheduled-game" style = "color: blue">
    ${scheduler(storageArray)} </div>`, '<button class = "won">Big Win!</button>', '<button class = "draw">We Tied!</button>', '<button class = "loss">Tough Loss!</button>' );
    $('.text-entry').val(placeholderValueQuestions[0]);
    i = 0;
  })

  //clears text-entry upon click so that you dont have to manually remove prompts.
  $('.text-entry').on('click', function(){
    $('.text-entry').val('')
  })





  $(function() {
      $('.list-display-field').on('click','.won',function(){
        //console.log($('.count').html)
      $('.score-tracker').html(function(index,counter){return +counter +3})
      })

  });

  $(function() {
      $('.list-display-field').on('click', '.draw', function(){
        //console.log($('.count').html)
      $('.score-tracker').html(function(index,counter){return +counter +1})
      })

  });

});