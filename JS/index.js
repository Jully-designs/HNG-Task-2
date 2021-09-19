window.onscroll = function (){
    scrollFunction();
    aboutAnimation();
}

window.onload = function (){loadText()};

function scrollFunction(){
    var nav = document.getElementById("nav-stick");
    if(document.documentElement.scrollTop > 30){
        nav.classList.add("sticky-nav");
        nav.style.transition = "all 0.5s ease-in-out";
        
    }else{
        nav.classList.remove("sticky-nav");
    }
}
function navHover(){
    var navItem = document.getElementById()
}
function loadText(){
    var animatedText = document.getElementById("header-text");
    var animatedImage = document.getElementById("header-image");
    animatedImage.classList.add("text-animation");
    animatedText.classList.add("text-animation");
}

var textLoad = document.getElementById("text");
var textValue = "I'M JULIET AFOLAYAN";
var speedValue = 250;
var i = 0;

function textAnimation(){
    if(i < textValue.length){
        textLoad.innerHTML += textValue.charAt(i);
        i++;
        setTimeout(textAnimation, speedValue);
    }
}
textAnimation();

function aboutAnimation(){
    var animatedImage = document.querySelector(".about-image");
    var animatedImagePosition = animatedImage.getBoundingClientRect().top
    var screenPosition = window.innerHeight;
 
    var animatedText = document.querySelector(".about-text");
    var animatedTextPosition = animatedText.getBoundingClientRect().top
 
    var animatedText = document.querySelector(".about-text");
    var animatedTextPosition = animatedText.getBoundingClientRect().top;
 
    if(screenPosition > animatedImagePosition){
        animatedImage.classList.add("animated-image");
    }else{
        animatedImage.classList.remove("animated-image");
    }
 
 
    if(screenPosition > animatedTextPosition){
      animatedText.classList.add("animated-text");
    }else{
      animatedText.classList.remove("animated-text");
     }
 };
 