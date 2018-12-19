var placeholderValueQuestions = ["Your team name","Home or Away?", "Date of game (DD/MM)", "Time of game (ex. 9:30 AM)", "Location", "Opponent name"];

var scheduler = function(array){
  var teamName = array[0];
  var homeOrAway = array[1];
  var date = array[2];
  var time = array[3];
  var location = array[4];
  var opponent = array[5];

  if(homeOrAway === 'Home' || homeOrAway === 'home'){
    return `Home game on ${date} scheduled for ${time} at ${location}. ${teamName} vs. ${opponent}.`
  } else {
    return `Away game on ${date} scheduled for ${time} at ${location}. ${teamName} @ ${opponent}.`
  }
}