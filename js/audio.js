// Functions for audio

// Variables
var audio = null;
var frequencyData = null;
var analyser = null;

// Initial audio setup
function audioSetup() {
    let ctx = new (window.AudioContext || window.webkitAudioContext)();
    audio = document.getElementById("song");
    let audioSrc = ctx.createMediaElementSource(audio);
    analyser = ctx.createAnalyser();
    audioSrc.connect(analyser);

    audioSrc.connect(ctx.destination);

    frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // Set play button listener
    var playPauseButton = document.getElementById("playPauseButton");
    playPauseButton.addEventListener("click", togglePlayPause, false);
}

function togglePlayPause() {
    // onPlay
    if (playPauseButton.innerHTML == "play_arrow") {
        playPauseButton.innerHTML = "pause";
        audio.play();
    }
    // onPause
    else {
        playPauseButton.innerHTML = "play_arrow";
        audio.pause();
    }
}