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
  'https://accounts.spotify.com/authorize',
  'Login with Spotify',
  'width=800,height=600'
)

window.spotifyCallback = (payload) => {
  popup.close()
  fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${payload}`
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    // do something with data
  })
}

token = window.location.hash.substr(1).split('&')[0].split("=")[1]
if (token) {
  window.opener.spotifyCallback(token)
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
// $.ajax({
//    url: "https://api.spotify.com/v1/me/top/artists",
//    type: "GET",
//    beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token );},
//    success: function(data) { 
//      // Do something with the returned data
//      data.items.map(function(artist) {
//        let item = $('<li>' + artist.name + '</li>');
//        item.appendTo($('#top-artists'));
//      });
//    }
// });
