var prompts = [
  'Type your name',
  'Type an adjective',
  'Type a noun'
];

// catch the answers in an array
var answers = [];

var currentPrompt = 0;

var nextPrompt = function() {
  // push all answers expect initial blank input
  if (currentPrompt != 0) {
    answers.push($('input').val());
  }		
  if (currentPrompt < prompts.length) {
    //put first prompt in all html elements with class
		$('.prompt').html(prompts[currentPrompt] + '<br><input type="text">');
    // move the next prompt into variable currentPrompt
    currentPrompt = currentPrompt + 1;  
  } else {
    $('.prompt').html("that's all for now!");
    alert(answers);
  }
}

//run nextPrompt function when button is clicked
$('button').click(function() {
  nextPrompt();
});
nextPrompt();