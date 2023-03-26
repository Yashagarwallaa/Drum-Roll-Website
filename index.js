for ( var i =0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",clickover);}

function clickover(){

animationn(this.innerHTML);
 if ( this.innerHTML == "w" ){
    var audio = new Audio("sounds/tom-1.mp3");
     audio.play();
  }
 else if ( this.innerHTML === "a" ){
    audio = new Audio("sounds/tom-2.mp3");
    audio.play();
 }
 else if ( this.innerHTML === "s" ){
    audio = new Audio("sounds/tom-3.mp3");
    audio.play();
 }
 else if ( this.innerHTML === "d" ){
    audio = new Audio("sounds/tom-4.mp3");
    audio.play();
 }
 else if ( this.innerHTML === "j" ){
    audio = new Audio("sounds/snare.mp3");
    audio.play();
 }
 else if ( this.innerHTML === "k" ){
    audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
 }
 else if ( this.innerHTML === "l" ){
    audio = new Audio("sounds/crash.mp3");
    audio.play();
 }
}
 document.addEventListener("keydown", function yash(e){
 var audio;
 console.log(e);
 var k = e.key;
 animationn(k);
  if ( k == "w"){
   audio = new Audio("sounds/tom-1.mp3");
   audio.play();
  }
  else if ( k === "a" ){
   audio = new Audio("sounds/tom-2.mp3");
   audio.play();
}
else if ( k === "s" ){
   audio = new Audio("sounds/tom-3.mp3");
   audio.play();
}
else if ( k === "d" ){
   audio = new Audio("sounds/tom-4.mp3");
   audio.play();
}
else if ( k === "j" ){
   audio = new Audio("sounds/snare.mp3");
   audio.play();
}
else if ( k === "k" ){
   audio = new Audio("sounds/kick-bass.mp3");
   audio.play();
}
else if ( k === "l" ){
   audio = new Audio("sounds/crash.mp3");
   audio.play();
}
});

function animationn(currentkey){
   var activebutton = document.querySelector("."+currentkey);
   activebutton.classList.add("pressed");
    
   setTimeout ( function(){
      activebutton.classList.remove("pressed"),100
   })
}
