var video;
var volume;


// // playButton = document.getElementsByClassName("play");
// playButton.innerHTML = '<img src="img/playbutton.png"/>';

// document.getElementsByClassName("play").style.color = "blue";
 

function getVid(){
	video = document.querySelector("#myVideo"); 
	video.load();
	console.log("Video Loaded");
	var playButton = document.querySelectorAll(".play"); //https://piazza.com/class/k4x9mhnyxx221k?cid=106
	playButton[0].innerHTML += '<img src="img/playbutton.png" alt="play button"/>';
	var pauseButton = document.querySelectorAll(".pause")
	pauseButton[0].innerHTML += '<img src="img/pauseButton.png" alt="pause button"/>'
	console.log(playButton[0]);
}

function playVid() { 
	video.play();
	console.log("Play Video");
	volume = document.getElementById("volume")
	volume.innerHTML = video.volume * 100 + '%';

} 


function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = video.playbackRate - .2;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = video.playbackRate + .25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	console.log("Current video location is: " + video.currentTime);
	if ((video.currentTime += 60) > video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
	} else{
		video.currentTime += 60;
	}
} 

function mute() { 
		if (video.muted == false){
			video.muted = true;
			console.log("Muted");
			document.querySelector('#mute').innerHTML = 'Unmute';
		} else{
			video.muted = false;
			document.querySelector('#mute').innerHTML = 'Mute';
			console.log("Unmuted")
		}
}

function changeVolume() {
	vol = document.getElementById("volumeSlider")

	var x = vol.value;
 	var y = x / 100;
 	// inspired by https://stackoverflow.com/questions/31926221/video-volume-slider-in-html5-and-javascript
 	video.volume = y;
 	console.log("Volume is " + video.volume);
	volume.innerHTML = video.volume * 100 + '%';
}
       

function gray() { 
	document.getElementById("myVideo").className = "grayscale"
	console.log("In grayscale")
}

function color() {
	document.getElementById("myVideo").className -= "grayscale";
	console.log("In color") 
}
