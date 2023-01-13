var audio = document.getElementById("audio");
var playPauseButton = document.getElementById("play-pause-icon");
var volumeSlider = document.getElementById("volume-slider");

playPauseButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playPauseButton.classList.remove("fa-play");
    playPauseButton.classList.add("fa-pause");
  } else {
    audio.pause();
    playPauseButton.classList.remove("fa-pause");
    playPauseButton.classList.add("fa-play");
  }
});

volumeSlider.addEventListener("input", function() {
  audio.volume = volumeSlider.value;
});

document.body.style.overflow = "hidden";
document.addEventListener("wheel", preventDefault, { passive: false });
document.addEventListener("touchmove", preventDefault, { passive: false });
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}


var iconBox = document.querySelector('.blue-box');
iconBox.addEventListener('click', redirect);
  
function redirect() {
window.location.href = "YOUR LINK";
}
