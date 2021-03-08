// global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


//Global Variables
var pattern = new Array(8);
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = clueHoldTime/3; //how long to pause in between clues
var mistakes = 0;
var countDown = 30; //30 second timer
var winCount = 0;
var loseCount = 0;

function createPattern(){
    for (let i = 0; i < pattern.length; i++){
      pattern[i] = Math.floor(Math.random() * Math.floor(6)) + 1;
    }
}

/*Chrome doesn't recognize audiocontext if it is created on page load
This will make it recognize it after some interaction*/
document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

function startGame(){
    //initialize game variables
  timer();  
  createPattern();
    progress = 0;
    mistakes = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    countDown = 30;
    
    //resetting variables
    clueHoldTime = 1000;
    cluePauseTime = clueHoldTime/3;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.6,
  3: 329.6,
  4: 392,
  5: 440,
  6: 523.3
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
  //reducing hold and pause time to speed up the game
  clueHoldTime *= 0.75;
  cluePauseTime = clueHoldTime/3;
}

function loseGame(){
  stopGame();
  loseCount++;
  document.getElementById("loseCount").innerHTML = "Loss: " + loseCount;
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  winCount++;
  document.getElementById("winCount").innerHTML = "Wins: " + winCount;
  alert("Congratulations, You Won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1) {
        //reached end of array without mistakes, win game
        winGame();
      }
      else {
        //correct so far, so add next clue
        progress++; 
        countDown = 30;
        playClueSequence();
      }
    }
    else {
      //move on to check the next guess
      guessCounter++;
    }
  } else {
    //player was Wrong, game Ends
    mistakes++; guessCounter = 0;
    if (mistakes == 3) {
      loseGame(); 
      return;
    }
    alert("You made a mistake! " + (3-mistakes) + " try(s) left");
  }
}



function timer(){
  var x = setInterval(function() {
    document.getElementById("clock").innerHTML = "Time Left: " + countDown;
    countDown--;
    
    if (countDown<0 || !gamePlaying){
      clearInterval(x);
      document.getElementById("clock").innerHTML = "-";
      stopGame();
    }
    
  }, 1000);
}


