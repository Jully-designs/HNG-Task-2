
window.onload = function(){printName()}

function printName(){
   var name = document.getElementById("myName");
    name.innerHTML = " <p>Hi and welcome,</p><h2> My Name is <br/>Juliet Afolayan </h2>";
    name.classList.add("namestyle");
    name.style.transition = "all 2s linear";
}

