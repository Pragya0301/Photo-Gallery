function upDate(elem){
    x = document.getElementById("image");
    x.style.backgroundImage='url('+elem.src+')';
    x.innerHTML =elem.alt;
    }

function unDo(){
    x = document.getElementById("image");
    x.style.backgroundImage='url(" ")';
    x.innerHTML ="Hover over an image below to display here.";
    }