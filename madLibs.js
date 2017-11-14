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
    // $('.prompt').html("that's all for now!");
    showFinal();
  }
}

var showFinal = function() {
  $('.prompt').html('This is the story of <span class="fill">' + answers[0] + '</span> and the <span class="fill">' + answers[1] + '</span> <span class="fill">' + answers[2] + '</span>.');
  // hide button
  $('button').hide();
}

//run nextPrompt function when button is clicked
$('button').click(function() {
  nextPrompt();
});
nextPrompt();