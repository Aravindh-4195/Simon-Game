  // Global properties for code

  var buttonColours = ["red", "blue", "green", "yellow"];
  var gamePattern = [];
  var count=1;
  var buttonClicked="";
  var patternIndx=0;

// adding events to buttons

$("#red").click(function(){
  animate("red");
  buttonClicked="red";
  rounds();
});

$("#blue").click(function(){
  animate("blue");
  buttonClicked="blue";
  rounds();
});

$("#green").click(function(){
  animate("green");
  buttonClicked="green";
  rounds();
});

$("#yellow").click(function(){
  animate("yellow");
  buttonClicked="yellow";
  rounds();
});

// animating the button

function animate(color){
  $("#" + color).fadeIn(50).fadeOut().fadeIn(50);
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

//starting the game by creating the random number 

function Start(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  setTimeout(function(){animate(randomChosenColour);},1500);
}

// function to start game
$(document).keypress(function(event){
  if(event.key==='a'){
      count=1 ;
      gamePattern = [];
      patternIndx=0;
  $("h1").slideUp().text("Level "+count).delay(100).slideDown();
      Start();}
});


// function for level Increment

function levelIncrement(){
  count++;
  patternIndx=0;
  $("h1").text("Level "+count);
  Start();
}

// function to levels
function rounds(){
  if(patternIndx<gamePattern.length){
    if(buttonClicked===gamePattern[patternIndx]){
      patternIndx++;
    }
    else {
      var audio=new Audio('sounds/wrong.mp3');
      audio.play();
      stop();
    }
  }
  if(patternIndx===gamePattern.length){
  var audio=new Audio('sounds/level_completed.mp3');
  audio.play();
    setTimeout(levelIncrement,3000);
  }
}

// function to stop the Game

function stop(){
  $("h1").text("Game Over,Press A to Start a New Game");
}




  