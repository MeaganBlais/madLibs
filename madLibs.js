var prompts = [
  'Type your name',
  'Type an adjective',
  'Type a noun'
];

var currentPrompt = 0;

var nextPrompt = function() {
  if (currentPrompt < prompts.length) {
    //put first prompt in all html elements with class
    $('.prompt').html(prompts[currentPrompt]);
    // move the next prompt into variable currentPrompt
    currentPrompt = currentPrompt + 1;  
  } else {
    $('.prompt').html("that's all for now!");
  }
}

//run nextPrompt function when button is clicked
$('button').click(function() {
  nextPrompt();
});
nextPrompt();