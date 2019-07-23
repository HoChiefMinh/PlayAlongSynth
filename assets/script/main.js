//for when we add an object with the difference synth sounds//
let count = 0;

//removes classes//
function classRemover() {
  $(".white-key").removeClass("white-active")
  $(".black-key").removeClass("black-active")
}

//creates buttons//
function createButton() {
  $(".drums").empty();
  let play = $("<button>");
  play.text("Play")
  play.addClass("play")
  play.attr("data-play", "true")
  $(".drums").append(play)
}

//on clicks for each note, if you know of a better way feel free to change this//
$(".C4-key").on("click", function() {
  $(".C4-key").addClass("white-active");
  setTimeout(classRemover, 150)
  var C4 = document.createElement('audio');
  C4.src = 'assets/sounds/C4.mp3'
  C4.play();
  console.log(audio);
})

$(".Db4-key").on("click", function() {
  $(".Db4-key").addClass("black-active");
  setTimeout(classRemover, 150)
  var Db4 = document.createElement('audio');
  Db4.src = 'assets/sounds/Db4.mp3'
  Db4.play();
})

$(".D4-key").on("click", function() {
  $(".D4-key").addClass("white-active");
  setTimeout(classRemover, 150)
  var D4 = document.createElement('audio');
  D4.src = 'assets/sounds/D4.mp3'
  D4.play();
})

$(".Eb4-key").on("click", function() {
  $(".Eb4-key").addClass("black-active");
  setTimeout(classRemover, 150)
  var Eb4 = document.createElement('audio');
  Eb4.src = 'assets/sounds/Eb4.mp3'
  Eb4.play();
})

$(".E4-key").on("click", function() {
  $(".E4-key").addClass("white-active");
  setTimeout(classRemover, 150)
  var E4 = document.createElement('audio');
  E4.src = 'assets/sounds/E4.mp3'
  E4.play();
})

$(".F4-key").on("click", function() {
  $(".F4-key").addClass("white-active");
  setTimeout(classRemover, 150)
  var F4 = document.createElement('audio');
  F4.src = 'assets/sounds/F4.mp3'
  F4.play();
})

$(".Gb4-key").on("click", function() {
  $(".Gb4-key").addClass("black-active");
  setTimeout(classRemover, 150)
  var Gb4 = document.createElement('audio');
  Gb4.src = 'assets/sounds/Gb4.mp3'
  Gb4.play();
})

$(".G4-key").on("click", function() {
  $(".G4-key").addClass("white-active");
  setTimeout(classRemover, 150)
  var G4 = document.createElement('audio');
  G4.src = 'assets/sounds/G4.mp3'
  G4.play();
})

$(".Ab4-key").on("click", function() {
  $(".Ab4-key").addClass("black-active");
  setTimeout(classRemover, 150)
  var Ab4 = document.createElement('audio');
  Ab4.src = 'assets/sounds/Ab4.mp3'
  Ab4.play();
})

$(".A4-key").on("click", function() {
  $(".A4-key").addClass("white-active");
  setTimeout(classRemover, 150)
  var A4 = document.createElement('audio');
  A4.src = 'assets/sounds/A4.mp3'
  A4.play();
})

$(".Bb4-key").on("click", function() {
  $(".Bb4-key").addClass("black-active");
  setTimeout(classRemover, 150)
  var Bb4 = document.createElement('audio');
  Bb4.src = 'assets/sounds/Bb4.mp3'
  Bb4.play();
})

$(".B4-key").on("click", function() {
  $(".B4-key").addClass("white-active");
  setTimeout(classRemover, 150)
  var B4 = document.createElement('audio');
  B4.src = 'assets/sounds/B4.mp3'
  B4.play();
})

$(".C5-key").on("click", function() {
  $(".C5-key").addClass("white-active");
  setTimeout(classRemover, 150)
  var C5 = document.createElement('audio');
  C5.src = 'assets/sounds/C5.mp3'
  C5.play();
})

$(".Db5-key").on("click", function() {
  $(".Db5-key").addClass("black-active");
  setTimeout(classRemover, 150)
  var Db5 = document.createElement('audio');
  Db5.src = 'assets/sounds/Db5.mp3'
  Db5.play();
})

$(".D5-key").on("click", function() {
  $(".D5-key").addClass("white-active");
  setTimeout(classRemover, 150)
  var D5 = document.createElement('audio');
  D5.src = 'assets/sounds/D5.mp3'
  D5.play();
})

$(".Eb5-key").on("click", function() {
  $(".Eb5-key").addClass("black-active");
  setTimeout(classRemover, 150)
  var Eb5 = document.createElement('audio');
  Eb5.src = 'assets/sounds/Eb5.mp3'
  Eb5.play();
})

$(".E5-key").on("click", function() {
  $(".E5-key").addClass("white-active");
  setTimeout(classRemover, 150)
  var E5 = document.createElement('audio');
  E5.src = 'assets/sounds/E5.mp3'
  E5.play();
})
//use keyboard keys to press piano keys//
  
//play drums on click and pause//
$(".drums").on("click", ".play", function() {
  let status = $(this).attr("data-play")
  let drums = document.createElement('audio')
  drums.src = 'assets/sounds/drums1.mp3'
  console.log(status)
  if (status === "true") {
    drums.play();
    $(this).attr("data-play", "false")

  } else {
    $(this).text("Play")
    $(this).attr("data-play", "true")
  }
  
})

createButton();

//creating buttons to hold our created sounds//
let soundButtonOne = $("<button>")
soundButtonOne.text("preset-1")
soundButtonOne.attr("id", "one")
$("#sounds").append(soundButtonOne)
let soundButtonTwo = $("<button>")
soundButtonTwo.text("preset-2")
soundButtonTwo.attr("id", "two")
$("#sounds").append(soundButtonTwo)
console.log(soundButtonOne)

//on click change to next sound//
let soundOne = document.getElementById("one")
soundOne.addEventListener("click", function() {
  console.log("hello")

  const synthA = new Tone.Synth({
    "oscillator" : {
      "type" : "sine",
      "harmonicity" : 0.8
    },
  
    "portamento" : 0.03,

    "pitchShift" : {
      "pitch" : -12
    },
    
  });
  
  synthA.toMaster();

  const piano = document.getElementById("piano");

  piano.addEventListener("mousedown", e => {
    // fires off a note continously until trigger is released
    synthA.triggerAttack(e.target.dataset.note);
    console.log(synthA);
  });
  
  piano.addEventListener("mouseup", e => {
    // stops the trigger
    synthA.triggerRelease();
  });
  
    // handles keyboard events
  document.addEventListener("keydown", e => {
    // set keys to keyboard//
    switch (e.key) {
      case "a":
        $(".C4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("C4"); 
      case "w":
        $(".Db4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("Db4");
      case "s":
        $(".D4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("D4");
      case "e":
        $(".Eb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("Eb4");
      case "d":
        $(".E4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("E4");
      case "f":
        $(".F4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("F4");
      case "t":
        $(".Gb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("Gb4");
      case "g":
        $(".G4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("G4");
      case "y":
        $(".Ab4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("Ab4");
      case "h":
        $(".A4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("A4");
      case "u":
        $(".Bb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("Bb4");
      case "j":
        $(".B4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("B4");
      case "k":
        $(".C5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("C5");
      case "o":
        $(".Db5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("Db5");
      case "l":
        $(".D5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("D5");
      case "p":
        $(".Eb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("Eb5");
      case ";":
        $(".E5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttack("E5")
      default:
        return;
    }
    });
  // the key plays the audio//
  document.addEventListener("keyup", e => {
    switch (e.key) {
      case "a":
      case "w":
      case "s":
      case "e":
      case "d":
      case "f":
      case "t":
      case "g":
      case "y":
      case "h":
      case "u":
      case "j":
      case "k":
      case "o":
      case "l":
      case "p":
      case ";":
        synthA.triggerRelease(); 
    }
  });
})



let soundTwo = document.getElementById("two")
soundTwo.addEventListener("click", function() {

  console.log("hello")
  
  var synthB = new Tone.Synth({
    oscillator: {
      type: 'triangle8'
    },
    envelope: {
      attack: 2,
      decay: 1,
      sustain: 0.4,
      release: 4
    }
  }).toMaster()

  const piano = document.getElementById("piano");

  piano.addEventListener("mousedown", e => {
    // fires off a note continously until trigger is released
    synthB.triggerAttack(e.target.dataset.note);
    console.log(synthB);
  });
  
  piano.addEventListener("mouseup", e => {
    // stops the trigger
    synthB.triggerRelease();
  });
  
    // handles keyboard events
  document.addEventListener("keydown", e => {
    // set keys to keyboard//
    switch (e.key) {
      case "a":
        return synthB.triggerAttack("C4");
      case "w":
        return synthB.triggerAttack("Db4");
      case "s":
        return synthB.triggerAttack("D4");
      case "e":
        return synthB.triggerAttack("Eb4");
      case "d":
        return synthB.triggerAttack("E4");
      case "f":
        return synthB.triggerAttack("F4");
      case "t":
        return synthB.triggerAttack("Gb4");
      case "g":
        return synthB.triggerAttack("G4");
      case "y":
        return synthB.triggerAttack("Ab4");
      case "h":
        return synthB.triggerAttack("A4");
      case "u":
        return synthB.triggerAttack("Bb4");
      case "j":
        return synthB.triggerAttack("B4");
      case "k":
        return synthB.triggerAttack("C5");
      case "o":
        return synthB.triggerAttack("Db5");
      case "l":
        return synthB.triggerAttack("D5");
      case "p":
        return synthB.triggerAttack("Eb5");
      case ";":
        return synthB.triggerAttack("E5")
      default:
        return;
    }
    });
  // the key plays the audio//
  document.addEventListener("keyup", e => {
    switch (e.key) {
      case "a":
      case "w":
      case "s":
      case "e":
      case "d":
      case "f":
      case "t":
      case "g":
      case "y":
      case "h":
      case "u":
      case "j":
      case "k":
      case "o":
      case "l":
      case "p":
      case ";":
        synthB.triggerRelease(); 
    }
  });
})

