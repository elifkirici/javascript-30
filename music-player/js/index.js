const music = [
  {
    id: 1,
    name: "Swimming Lessons ",
    img: "https://media.istockphoto.com/videos/circle-audio-equalizer-background-music-control-levels-multicolored-video-id919960584?s=640x640",
    audio: "audio//Swimming Lessons - Bail Bonds.mp3",
  },
  {
    id: 2,
    name: "Summer Solstice ",
    img: "https://static.vecteezy.com/system/resources/thumbnails/002/021/821/original/music-equalizer-ring-fire-free-video.jpg",
    audio: "audio/Summer Solstice on the June Planet - Bail Bonds.mp3",
  },
  {
    id: 3,
    name: "I Feel It All So Deeply",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzpGlCMPrGYMFnfOFAfuNU9n919MFqN3cN_OE1L1ONdq4LnnYOm2545ZefkP-W7bDK9Y&usqp=CAU",
    audio: "audio/I Feel It All So Deeply - Bail Bonds.mp3",
  },
  {
    id: 4,
    name: "The Monuments and ",
    img: "https://www.stockvault.net/photo/223867/background-music-represents-sound-track-and-abstract",
    audio: "audio/The Monuments and Tunnels in Goa and Hampi - Bail Bonds.mp3",
  },
];

const photoDOM = document.getElementById("photo");
const nameDOM = document.getElementById("name");
const myAudioDOM = document.getElementById("myAudio");
const playBtnDom = document.getElementById("play");
const pauseBtnDom = document.getElementById("pause");

currentitem = 0;

window.addEventListener("DOMContentLoaded", function () {
  playMusic(currentitem);
  pauseBtnDom.style["display"] = "none";

});
function playMusic(play) {
  const item = music[play];
  photoDOM.src = item.img;
  nameDOM.textContent = item.name;
  myAudioDOM.src = item.audio;
  myAudioDOM.play();
  

  playBtnDom.addEventListener("click", () => {
    myAudioDOM.src = item.audio;
    myAudioDOM.play();
    pauseBtnDom.style.removeProperty("display");
    playBtnDom.style["display"] = "none";


  pauseBtnDom.addEventListener("click", () => {
      myAudioDOM.src = item.audio;
      myAudioDOM.pause();
      playBtnDom.style.removeProperty("display");
      pauseBtnDom.style["display"] = "none";
    });
  });
}
function buttonNext() {
  currentitem++;
  playMusic(currentitem);
  pauseBtnDom.style.removeProperty("display");
  playBtnDom.style["display"] = "none";


}
function buttonPrev() {
  currentitem--;
  playMusic(currentitem);
  pauseBtnDom.style.removeProperty("display");
  playBtnDom.style["display"] = "none";
}
