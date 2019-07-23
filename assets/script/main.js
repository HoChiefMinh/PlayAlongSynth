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
