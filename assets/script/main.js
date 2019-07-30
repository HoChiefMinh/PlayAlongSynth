//for when we add an object with the difference synth sounds//
let count = 0;

// Play boolean
let playing = false;

// Declare audio variables
let drumsOne = document.createElement('audio');
let drumsTwo = document.createElement('audio')
let drumsThree = document.createElement('audio');
let drumsFour = document.createElement('audio');
let drumsFive = document.createElement('audio');

// Creates Button Bar for drum loops
function createButton() {
  $(".drums").empty();
    let play = $("<button>");
    play.text("Play")
    play.addClass("play")
    play.attr("id", "play-one")
    $(".drums").append(play)
    let playTwo = $("<button>");
    playTwo.text("Play")
    playTwo.attr("id", "play-two")
    playTwo.addClass("play")
    $(".drums").append(playTwo)
    let playThree = $("<button>");
    playThree.text("Play")
    playThree.attr("id", "play-three")
    playThree.addClass("play")
    $(".drums").append(playThree)
    let playFour = $("<button>");
    playFour.text("Play")
    playFour.attr("id", "play-four")
    playFour.addClass("play")
    $(".drums").append(playFour)
    let playFive = $("<button>");
    playFive.text("Play")
    playFive.attr("id", "play-five")
    playFive.addClass("play")
    $(".drums").append(playFive) 
    console.log(playFive)  
}

createButton();
//play drums on click and pause//
$(".drums").on("click", "#play-one", function() {
  if(playing === false) {
    playing = true;
    drumsOne.src = 'assets/sounds/drums1.mp3';
    drumsOne.play();
  }
  else{
    drumsOne.src = "";
    drumsTwo.src = "";
    drumsThree.src = "";
    playing = false;
  }
 
})
$(".drums").on("click", "#play-two", function() {
  if(playing === false) {
    playing = true;
    drumsTwo.src = 'assets/sounds/drums2.wav'
    drumsTwo.play();
  }
  else{
    drumsOne.src = "";
    drumsTwo.src = "";
    drumsThree.src = "";
    playing = false;
  }
 
 
})
$(".drums").on("click", "#play-three", function() {
 if(playing === false)  {
  playing = true;
  drumsThree.src = 'assets/sounds/bossanova.wav';;
  drumsThree.play();
 }
 else{
  drumsOne.src = "";
  drumsTwo.src = "";
  drumsThree.src = "";
  playing = false;
 }
 
})

$(".drums").on("click", "#play-four", function() {
  if(playing === false)  {
   playing = true;
   drumsFour.src = 'assets/sounds/house.wav';;
   drumsFour.play();
  }
  else{
   drumsOne.src = "";
   drumsTwo.src = "";
   drumsThree.src = "";
   drumsFour.src = "";
   playing = false;
  }
  
 })

 $(".drums").on("click", "#play-five", function() {
  if(playing === false)  {
   playing = true;
   drumsFive.src = 'assets/sounds/tropical.wav';
   drumsFive.play();
  }
  else{
   drumsOne.src = "";
   drumsTwo.src = "";
   drumsThree.src = "";
   drumsFour.src = "";
   drumsFive.src = "";
   playing = false;
  }
  
 })











// -------------------------Chord Voicings-------------------------//
$("#chordSearchBar").on("click", function(event) {
  event.preventDefault();

  const chord = $("#chordSearch").val().trim()

  // addSpace = () => {
  //   if (chord )
  // }

  console.log(chord)
  const queryURL= "https://api.uberchord.com/v1/chords/" + chord
  console.log(queryURL)

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  
  console.log(response)

  console.log(response[0].tones)

  $("#chord").text(response[0].tones)

  });

});


   



// ------------------------------- Spotfiy LOGGIN  ------------------------------- //

// Get the hash of the url
// const hash = window.location.hash
// .substring(1)
// .split('&')
// .reduce(function (initial, item) {
//   if (item) {
//     var parts = item.split('=');
//     initial[parts[0]] = decodeURIComponent(parts[1]);
//   }
//   return initial;x
// }, {});
// window.location.hash = '';
// console.log(hash)


// // Set token
// let _token = hash.access_token;
// console.log(_token)

// const authEndpoint = 'https://accounts.spotify.com/authorize';

// // Replace with your app's client ID, redirect URI and desired scopes
// const clientId = 'b8ef7c5c993c43a9b1a4266b250d1e57';
// const redirectUri = 'http://localhost:5500/';
// const scopes = [
//   'user-top-read'
// ];

// // If there is no token, redirect to Spotify authorization
// if (!_token) {
//   window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
// }

// // Make a call using the token
// $.ajax({
//         url: 'https://api.spotify.com/v1/albums" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer "',
//         headers: {
//             'Authorization': 'Bearer ' + _token
//         },
//         method: "GET"
//     }).then(function(response) {
//       console.log(response)
//     })
