// script file for Piano
for(var i = 0; i <= 14; i++){
    document.getElementsByClassName("outer")[0].innerHTML +=  "<button class=whiteBtn data-id=" + i + "></button>"
}
for(var j = 0; j <= 13; j++){
    document.getElementsByClassName("inner")[0].innerHTML +=  "<button class=blackBtn data-id=" + j + "></button>"           
}
for(var k = 0; k<=14; k++){
    document.getElementsByClassName("audio")[0].innerHTML +=  "<audio id=" + "aud" +k + " class=audioMain></audio>"    
}
for(var l = 0; l<=14; l++){
    document.getElementsByClassName("audioMain")[l].innerHTML +=  "<source src=" + l + ".mp3" +  " type=audio/mp3 >" 
}
var white = document.getElementsByClassName('whiteBtn');
var black = document.getElementsByClassName('blackBtn');

for(var n = 0; n < white.length; n++){
white[n].addEventListener('click', function(){
    this.style.boxShadow = "inset 1px 2px 2px #000000c2";
    var dataId = this.getAttribute("data-id");
    var audio = document.getElementById("aud"+dataId);
    audio.play();
    setTimeout(() => {
        this.style.boxShadow = "none";
    }, 200);     
});
black[n].addEventListener('click', function(){
    this.style.boxShadow = "inset 0px 1px 2px #f3f3f3ed";
    var dataId = this.getAttribute("data-id");
    var audio = document.getElementById("aud"+dataId);
    audio.play();
    setTimeout(() => {
        this.style.boxShadow = "0px 2px 2px black";
    }, 200);
});

document.addEventListener('keyress', logKey, false);
function logKey(e) {
    console.log();
  }

}   