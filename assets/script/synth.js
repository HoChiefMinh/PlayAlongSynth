function classRemover() {
  $(".white-key").removeClass("white-active")
  $(".black-key").removeClass("black-active")
}

//creating buttons to hold our created sounds//
let soundButtonOne = $("<button>")
soundButtonOne.text("Preset-1")
soundButtonOne.attr("id", "one")
$("#preset-1").append(soundButtonOne)
let soundButtonTwo = $("<button>")
soundButtonTwo.text("Preset-2")
soundButtonTwo.attr("id", "two")
$("#preset-2").append(soundButtonTwo)
console.log(soundButtonTwo)
console.log(soundButtonOne)
let pianoButton = $("<button>")
pianoButton.text("Piano")
pianoButton.attr("id", "piano-one")
$("#piano-one").append(pianoButton)
let soundButtonThree = $("<button>")
soundButtonThree.text("Preset-3")
soundButtonThree.attr("id", "three")
$("#preset-3").append(soundButtonThree)
let soundButtonFour = $("<button>")
soundButtonFour.text("Minh's Preset")
soundButtonFour.attr("id", "four")
$("#minhs-preset").append(soundButtonFour)
let soundButtonFive = $("<button>")
soundButtonFive.text("Patrick's Preset")
soundButtonFive.attr("id", "five")
$("#patrick-preset").append(soundButtonFive)
let soundButtonSix = $("<button>")
soundButtonSix.text("Dark Cave")
soundButtonSix.attr("id", "six")
$("#dark-cave").append(soundButtonSix)


const synthA = new Tone.PolySynth(6, Tone.Synth, {
  oscillator : {
    type : "sine",
    partials : [0, 1, 6, 7]
  },

  "envelope" : {
    "attack" : 1,
    "decay" : 0,
    "sustain" : 1,
    "release" : 4,
  },

  "portamento" : 0.03,

  "pitchShift" : {
    "pitch" : -12
  },
  
})

const synthB = new Tone.PolySynth(6, Tone.Synth, {
  oscillator: {
    type: 'triangle8'
  },
  envelope: {
    attack: 2,
    decay: 1,
    sustain: 0.4,
    release: 4
  }
})

const synthC = new Tone.PolySynth(6, Tone.Synth, {

  oscillator: {
    type : 'sine',
    modulationType : "sine",
    modulationIndex: 3,
    frequency : 440,
    harmonicity : 3.4,
  },
  
  portamento: 0.1,

  envelope: {
    attack: 0.001,
    decay: 0.5,
    sustain: 0.1,
    release: 0.1   
  },

  pitchShift: {
    pitch: -12
  },
})

const synthD = new Tone.PolySynth(6, Tone.Synth, {

  oscillator: {
    type: 'sawtooth',
    partials : [1, 0, 2, 1],
  },

  portamento: 0.8,

})

const synthE = new Tone.PolySynth(6, Tone.Synth, {

  oscillator: {
    type: 'fatsawtooth',
    partials : [1, 0, 0, 0],
  },


  envelope: {
    attack: 3.9,
    decay: 0.9,
    sustain: 0.9,
    release: 1000     
  },

})

const synthF = new Tone.PolySynth(6, Tone.Synth, {
  portamento : 0.2,

  oscillator: {
    type: "fatcustom",
    partials: [0.2,1,0,0.5,0.1],
    spread: 40,
    count: 3
  },

  envelope: {
    attack: 0.001,
    decay: 1.6,
    sustain: 0,
    release: 1.6
  }
})
//on click change to next sound//
//starts piano audio on click//
let pianoOne = document.getElementById("piano-one")
pianoOne.addEventListener("click", function() {
  synthA.disconnect()
  synthB.disconnect()
  synthC.disconnect()
  synthD.disconnect()
  synthE.disconnect()
  synthF.disconnect()
  console.log('hello')
  $(".C4-key").on("click", function() {
    $(".C4-key").addClass("white-active");
    setTimeout(classRemover, 150)
    var C4 = document.createElement('audio');
    C4.src = 'assets/sounds/C4.mp3'
    C4.play();
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
})
//synths//
//first preset on click//
let soundOne = document.getElementById("one")
soundOne.addEventListener("click", function() {

  synthA.toMaster()
  synthC.disconnect()
  synthB.disconnect()
  synthD.disconnect()
  synthE.disconnect()
  synthF.disconnect()
  
  const piano = document.getElementById("piano");

  piano.addEventListener("click", e => {
    // fires off a note continously until trigger is released
    synthA.triggerAttackRelease(e.target.dataset.note, "3n");
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
        return synthA.triggerAttackRelease("C4", "3n"); 
      case "w":
        $(".Db4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("Db4", "3n");
      case "s":
        $(".D4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("D4", "3n");
      case "e":
        $(".Eb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("Eb4", "3n");
      case "d":
        $(".E4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("E4", "3n");
      case "f":
        $(".F4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("F4", "3n");
      case "t":
        $(".Gb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("Gb4", "3n");
      case "g":
        $(".G4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("G4", "3n");
      case "y":
        $(".Ab4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("Ab4", "3n");
      case "h":
        $(".A4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("A4", "3n");
      case "u":
        $(".Bb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("Bb4", "3n");
      case "j":
        $(".B4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("B4", "3n");
      case "k":
        $(".C5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("C5", "3n");
      case "o":
        $(".Db5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("Db5", "3n");
      case "l":
        $(".D5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("D5", "3n");
      case "p":
        $(".Eb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("Eb5", "3n");
      case ";":
        $(".E5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("E5", "3n")
      case "'":
        $(".F5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("F5", "3n")
      case "]":
        $(".Gb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("Gb5", "3n")
      case "z":
        $(".G5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("G5", "3n")
      case "x":
        $(".Ab5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("Ab5", "3n")
      case "c":
        $(".A5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("A5", "3n")
      case "v":
        $(".Bb5-key").addClass("black-active")
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("Bb5", "3n")
      case "b":
        $(".B5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthA.triggerAttackRelease("B5", "3n")
      default:
        return;
    }
    });
})
//second sound on click//
let soundTwo = document.getElementById("two")
soundTwo.addEventListener("click", function() {
  console.log("hello")

  synthA.disconnect()
  synthC.disconnect()
  synthD.disconnect()
  synthE.disconnect()
  synthF.disconnect()
  synthB.toMaster()

  const piano = document.getElementById("piano");

  piano.addEventListener("mousedown", e => {
    // fires off a note continously until trigger is released
    synthB.triggerAttack(e.target.dataset.note);
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
        $(".C4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("C4", "3n");
      case "w":
        $(".Db4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("Db4", "3n");
      case "s":
        $(".D4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("D4", "3n");
      case "e":
        $(".Eb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("Eb4", "3n");
      case "d":
        $(".E4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("E4", "3n");
      case "f":
        $(".F4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("F4", "3n");
      case "t":
        $(".Gb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("Gb4", "3n");
      case "g":
        $(".G4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("G4", "3n");
      case "y":
        $(".Ab4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("Ab4", "3n");
      case "h":
        $(".A4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("A4", "3n");
      case "u":
        $(".Bb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("Bb4", "3n");
      case "j":
        $(".B4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("B4", "3n");
      case "k":
        $(".C5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("C5", "3n");
      case "o":
        $(".Db5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("Db5", "3n");
      case "l":
        $(".D5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("D5", "3n");
      case "p":
        $(".Eb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("Eb5", "3n");
      case ";":
        $(".E5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("E5", "3n")
      case "'":
        $(".F5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("F5", "3n")
      case "]":
        $(".Gb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("Gb5", "3n")
      case "z":
        $(".G5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("G5", "3n")
      case "x":
        $(".Ab5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("Ab5", "3n")
      case "c":
        $(".A5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("A5", "3n")
      case "v":
        $(".Bb5-key").addClass("black-active")
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("Bb5", "3n")
      case "b":
        $(".B5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthB.triggerAttackRelease("B5", "3n")
      default:
        return;
    }
    });
  })
//third preset in dropdown on click//
let soundThree = document.getElementById("three")
soundThree.addEventListener("click", function() {

console.log(synthC)

var delay = new Tone.PingPongDelay({
  delayTime : "8n",
  maxDelayTime : "4n"
  }).toMaster()

synthC.connect(delay)
synthA.disconnect()
synthB.disconnect()
synthC.disconnect()
synthE.disconnect()
synthD.disconnect()
synthF.disconnect()
synthC.toMaster()

 piano = document.getElementById("piano");

  piano.addEventListener("mousedown", e => {
    // fires off a note continously until trigger is released
    synthC.triggerAttack(e.target.dataset.note);
    console.log(synthC);
  });
  
  piano.addEventListener("mouseup", e => {
    // stops the trigger
    synthC.triggerRelease();
  });
  
    // handles keyboard events
  document.addEventListener("keydown", e => {
    // set keys to keyboard//
    switch (e.key) {
      case "a":
        $(".C4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease(["C4", "Eb4", "G4", "Bb4", "D5"] , "8n");
      case "w":
        $(".Db4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease(["Db4", "E4", "Ab4", "B4", "Eb5"], "8n");
      case "s":
        $(".D4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease(["D4", "F4", "A4", "C5", "E5"], "8n");
      case "e":
        $(".Eb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease(["Eb4", "Gb4", "Bb4", "Db5", "F5"], "8n");
      case "d":
        $(".E4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease(["E4", "G4", "B4", "D5", "Gb5"], "8n");
      case "f":
        $(".F4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease(["F4", "Ab4", "C5", "Eb5", "G5"], "8n");
      case "t":
        $(".Gb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease(["Gb4", "A4", "Db5", "E5", "Ab5"], "8n");
      case "g":
        $(".G4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease(["G4", "Bb4", "D5", "F5", "A5"], "8n");
      case "y":
        $(".Ab4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease(["Ab4", "B4", "Eb5", "Gb5", "Ab5"], "8n");
      case "h":
        $(".A4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease(["A4", "C5", "E5", "G5", "B5"], "8n");
      case "u":
        $(".Bb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("Bb4", "3n");
      case "j":
        $(".B4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("B4", "3n");
      case "k":
        $(".C5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("C5", "3n");
      case "o":
        $(".Db5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("Db5", "3n");
      case "l":
        $(".D5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("D5", "3n");
      case "p":
      $(".Eb5-key").addClass("black-active");
      setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("Eb5", "3n");
      case ";":
        $(".E5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("E5", "3n")
      case "'":
        $(".F5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("F5", "3n")
      case "]":
        $(".Gb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("Gb5", "3n")
      case "z":
        $(".G5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("G5", "3n")
      case "x":
        $(".Ab5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("Ab5", "3n")
      case "c":
        $(".A5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("A5", "3n")
      case "v":
        $(".Bb5-key").addClass("black-active")
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("Bb5", "3n")
      case "b":
        $(".B5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthC.triggerAttackRelease("B5", "3n")
      default:
        return;
    }
    });
  })
  //fourth preset on click//
  let soundFour = document.getElementById("four")
  soundFour.addEventListener("click", function() {

    let vibrato = new Tone.Vibrato({
      type : 'sawtooth',
      maxDelay  : 0.005 ,
      frequency  : 5 ,
      depth  : 0.1 
    }).toMaster()

    let filter = new Tone.AutoFilter({
      frequency  : 1 ,
      type  : "sine" ,
      depth  : 1 ,
      baseFrequency  : 200 ,
      octaves  : 2.6 ,
      filter  : {
      rolloff  : -12 ,
      Q  : 1
      }
    }).toMaster()

    let phaser = new Tone.Phaser({
      frequency  : 0.5 ,
      octaves  : 3 ,
      stages  : 10 ,
      Q  : 2 ,
      baseFrequency  : 350
    }).toMaster()

    console.log(filter);
    synthD.connect(filter)
    synthD.connect(vibrato)
    synthD.connect(phaser)
    synthD.toMaster()
    synthA.disconnect()
    synthB.disconnect()
    synthC.disconnect()
    synthE.disconnect()
    synthF.disconnect()

  piano = document.getElementById("piano");

  piano.addEventListener("mousedown", e => {
    // fires off a note continously until trigger is released
    synthD.triggerAttack(e.target.dataset.note, "3n");
  });
  
  piano.addEventListener("mouseup", e => {
    // stops the trigger
    synthD.triggerRelease();
  });
  
    // handles keyboard events
  document.addEventListener("keydown", e => {
    // set keys to keyboard//
    switch (e.key) {
      case "a":
        $(".C4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("C4", "3n");
      case "w":
        $(".Db4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("Db4", "3n");
      case "s":
        $(".D4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("D4", "3n");
      case "e":
        $(".Eb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("Eb4", "3n");
      case "d":
        $(".E4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("E4", "3n");
      case "f":
        $(".F4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("F4", "3n");
      case "t":
        $(".Gb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("Gb4", "3n");
      case "g":
        $(".G4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("G4", "3n");
      case "y":
        $(".Ab4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("Ab4", "3n");
      case "h":
        $(".A4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("A4", "3n");
      case "u":
        $(".Bb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("Bb4", "3n");
      case "j":
        $(".B4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("B4", "3n");
      case "k":
        $(".C5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("C5", "3n");
      case "o":
        $(".Db5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("Db5", "3n");
      case "l":
        $(".D5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("D5", "3n");
      case "p":
        $(".Eb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("Eb5", "3n");
      case ";":
        $(".E5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("E5", "3n")
      case "'":
        $(".F5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("F5", "3n")
      case "]":
        $(".Gb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("Gb5", "3n")
      case "z":
        $(".G5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("G5", "3n")
      case "x":
        $(".Ab5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("Ab5", "3n")
      case "c":
        $(".A5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("A5", "3n")
      case "v":
        $(".Bb5-key").addClass("black-active")
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("Bb5", "3n")
      case "b":
        $(".B5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthD.triggerAttackRelease("B5", "3n")
      default:
        return;
    }
    });
    console.log(synthD)
  })
  //fifth preset on click//
  let soundFive = document.getElementById("five")
  soundFive.addEventListener("click", function() {

    let reverb = new Tone.Reverb({
      decay : 5000,
      preDelay : 1000
    }).toMaster()
    synthE.connect(reverb)
    synthE.toMaster()
    synthA.disconnect()
    synthB.disconnect()
    synthC.disconnect()
    synthD.disconnect()
    synthF.disconnect()

  piano = document.getElementById("piano");

  piano.addEventListener("mousedown", e => {
    // fires off a note continously until trigger is released
    synthE.triggerAttack(e.target.dataset.note);
  });
  
  piano.addEventListener("mouseup", e => {
    // stops the trigger
    synthE.triggerRelease();
  });
  
    // handles keyboard events
  document.addEventListener("keydown", e => {
    // set keys to keyboard//
    switch (e.key) {
      case "a":
        $(".C4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("C4", "3n");
      case "w":
        $(".Db4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("Db4", "3n");
      case "s":
        $(".D4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("D4", "3n");
      case "e":
        $(".Eb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("Eb4", "3n");
      case "d":
        $(".E4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("E4", "3n");
      case "f":
        $(".F4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("F4", "3n");
      case "t":
        $(".Gb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("Gb4", "3n");
      case "g":
        $(".G4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("G4", "3n");
      case "y":
        $(".Ab4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("Ab4", "3n");
      case "h":
        $(".A4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("A4", "3n");
      case "u":
        $(".Bb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("Bb4", "3n");
      case "j":
        $(".B4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("B4", "3n");
      case "k":
        $(".C5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("C5", "3n");
      case "o":
        $(".Db5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("Db5", "3n");
      case "l":
        $(".D5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("D5", "3n");
      case "p":
        $(".Eb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("Eb5", "3n");
      case ";":
        $(".E5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("E5", "3n")
      case "'":
        $(".F5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("F5", "3n")
      case "]":
        $(".Gb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("Gb5", "3n")
      case "z":
        $(".G5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("G5", "3n")
      case "x":
        $(".Ab5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("Ab5", "3n")
      case "c":
        $(".A5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("A5", "3n")
      case "v":
        $(".Bb5-key").addClass("black-active")
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("Bb5", "3n")
      case "b":
        $(".B5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthE.triggerAttackRelease("B5", "3n")
      default:
        return;
    }
    });
  })
  //sixth preset
  let soundSix = document.getElementById("six")
  soundSix.addEventListener("click", function() {

    synthF.toMaster()
    synthA.disconnect()
    synthB.disconnect()
    synthC.disconnect()
    synthD.disconnect()
    synthE.disconnect()

    console.log(synthF)

  piano = document.getElementById("piano");

  piano.addEventListener("mousedown", e => {
    // fires off a note continously until trigger is released
    synthF.triggerAttack(e.target.dataset.note);
  });
  
  piano.addEventListener("mouseup", e => {
    // stops the trigger
    synthF.triggerRelease("3n");
  });
  
    // handles keyboard events
  document.addEventListener("keydown", e => {
    // set keys to keyboard//
    switch (e.key) {
      case "a":
        $(".C4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("C4", "3n");
      case "w":
        $(".Db4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("Db4", "3n");
      case "s":
        $(".D4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("D4", "3n");
      case "e":
        $(".Eb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("Eb4", "3n");
      case "d":
        $(".E4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("E4", "3n");
      case "f":
        $(".F4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("F4", "3n");
      case "t":
        $(".Gb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("Gb4", "3n");
      case "g":
        $(".G4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("G4", "3n");
      case "y":
        $(".Ab4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("Ab4", "3n");
      case "h":
        $(".A4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("A4", "3n");
      case "u":
        $(".Bb4-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("Bb4", "3n");
      case "j":
        $(".B4-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("B4", "3n");
      case "k":
        $(".C5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("C5", "3n");
      case "o":
        $(".Db5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("Db5", "3n");
      case "l":
        $(".D5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("D5", "3n");
      case "p":
        $(".Eb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("Eb5", "3n");
      case ";":
        $(".E5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("E5", "3n")
      case "'":
        $(".F5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("F5", "3n")
      case "]":
        $(".Gb5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("Gb5", "3n")
      case "z":
        $(".G5-key").addClass("white-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("G5", "3n")
      case "x":
        $(".Ab5-key").addClass("black-active");
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("Ab5", "3n")
      case "c":
        $(".A5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("A5", "3n")
      case "v":
        $(".Bb5-key").addClass("black-active")
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("Bb5", "3n")
      case "b":
        $(".B5-key").addClass("white-active")
        setTimeout(classRemover, 150)
        return synthF.triggerAttackRelease("B5", "3n")
      default:
        return;
    }
    });
  })













