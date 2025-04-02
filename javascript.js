var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 40);
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 80);

var canva = document.getElementById("myCanvas2")
var ctx = canva.getContext("2d")
// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

var myVideo = document.getElementById("video_tik_tok");
function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}
function makeBig() {
  myVideo.width = myVideo.width * 1.2;
  myVideo.height = myVideo.height * 1.2;
}
function makeSmall() {
  myVideo.width = myVideo.width * 0.8;
  myVideo.height = myVideo.height * 0.8;
}
function makeNormal() {
  myVideo.width = 360;
  myVideo.height = 640;
}

const x = document.getElementById("demo_local");
function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, error);
  }
  else {
    x.innerHTML = "Нет Геолокации";
  }
}
function success(position) {
  x.innerHTML = "Ширина: " + position.coords.latitude +
  "<br>Долгота: " + position.coords.longitude;
}
function error() {
  alert("Изви, нет позиции")
}

function FlipFunction() {
  document.getElementById("flip-panel").style.display = "block"
}
function CloseFlipFunction() {
  document.getElementById("flip-panel").style.display = "none"
}