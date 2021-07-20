var coverBG = document.getElementById("cover");
var cardBody = document.getElementById("imgCard");
var video = document.getElementById("bgVideo");
var nameTextShow = document.getElementById("nameTextShow");
var input = document.querySelector("input");
var add = document.getElementById("add");
function clickMe() {
    cardBody.style.display = "block";
    coverBG.style.display = "none";
    
    if (video.paused) {
    video.play();

  } else {
    video.pause();
  }
}
add.addEventListener("click", function (){
  nameTextShow.innerHTML = input.value;
  
});
