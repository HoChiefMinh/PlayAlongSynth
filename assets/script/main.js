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

// var spotifyApi = new SpotifyWebApi();
// // spotifyApi.setPromiseImplementation(Q);

// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
//   if (err) console.error(err);
//   else console.log('Artist albums', data);
// });

// // get Elvis' albums, using Promises through Promise, Q or when
// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
//   .then(function(data) {
//     console.log('Artist albums', data);
//   }, function(err) {
//     console.error(err);
//   });


// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
// console.log(response)





popup = window.open(
  "https://accounts.spotify.com/authorize?client_id=b8ef7c5c993c43a9b1a4266b250d1e57&redirect_uri=http://localhost:5500/&response_type=token&state=123",
  'Login with Spotify',
  'width=800,height=600'
)

queryURL2 = "https://api.spotify.com/v1/artists/5oOhM2DFWab8XhSdQiITry"


$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function(response) {

  console.log(response)
});


window.spotifyCallback = (payload) => {
  console.log(payload)

  popup.close()
  fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
    
  }).then(response => {
    console.log(response)
    return response.json()
  }).then(data => {
   
    // do something with data
  })
}

token = window.location.hash.substr(1).split('&')[0].split("=")[1]

if (token) {
  window.opener.spotifyCallback(token)
  console.log(token)

}





// // Get the hash of the url
// const hash = window.location.hash
// .substring(1)
// .split('&')
// .reduce(function (initial, item) {
//   if (item) {
//     var parts = item.split('=');
//     initial[parts[0]] = decodeURIComponent(parts[1]);
//   }
//   return initial;
// }, {});
// window.location.hash = '';

// // Set token
// let _token = hash.access_token;

// const authEndpoint = 'https://accounts.spotify.com/authorize';

// // Replace with your app's client ID, redirect URI and desired scopes
// const clientId = 'b8ef7c5c993c43a9b1a4266b250d1e57';
// const redirectUri = 'https://hochiefminh.github.io/ProjectUno/';
// const scopes = [
//   'user-top-read'
// ];

// // If there is no token, redirect to Spotify authorization
// if (!_token) {
//   window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
// }

// // Make a call using the token

