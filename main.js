//get event date
var countDownDate = new Date("Jan 28, 2023 00:00:00").getTime();

//set countdown
var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    "<div class='tiempos'>" +
    days +
    "<p class='tiempoT'>Dias</p></div>" +
    "<div class='tiempos'>" +
    hours +
    "<p class='tiempoT'>Horas</p></div>" +
    "<div class='tiempos'>" +
    minutes +
    "<p class='tiempoT'>Minutos</p></div>" +
    "<div class='tiempos'>" +
    seconds +
    "<p class='tiempoT'>Segundos</p></div>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Es hoy";
  }
}, 1000);

//audio button and toggle
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
  let imgAudio = document.getElementById("audioImg");
  let mySrc = imgAudio.getAttribute("src");
  if (mySrc === "volume-up.png") {
    imgAudio.setAttribute("src", "mute.png");
  } else {
    imgAudio.setAttribute("src", "volume-up.png");
  }
}

myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
};

//display gift 
function regalar() {
  let regalo = document.getElementById("regalo");
  let pedirRegalo = document.getElementById("pedirRegalo");
  let text = document.getElementById("giftTextRemove");
  let giftCard = document.getElementById("giftCard");
  giftCard.style.paddingBottom = "3vh";
  pedirRegalo.style.display = "flex";
  let clickImg = document.getElementById("click");
  clickImg.style.display = "none";
  regalo.style.marginLeft = "0em";
  text.style.display = "none";
}

//hide gift
function remove() {
  let text = document.getElementById("giftTextRemove");
  pedirRegalo.style.display = "none";
  text.style.display = "block";
  giftCard.style.paddingBottom = "0";
}

//copy text button
function copyText() {
  let cvuNum = document.getElementById("cvu");
  navigator.clipboard.writeText(cvuNum.innerHTML);
  let copyBtn = document.getElementById("copy");
  copyBtn.style.filter = "opacity(30%)";
}
