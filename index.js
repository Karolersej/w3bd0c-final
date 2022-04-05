// alle avatar billeder
const yessica_img = document.querySelector(".yessica");
const daniel_img = document.querySelector(".daniel");
const emma_img = document.querySelector(".emma");
const karol_img = document.querySelector(".karol");

// alle lydfiler
const yessica_lyd= new Audio("https://sndup.net/dsg4/d");
const daniel_lyd = new Audio("https://sndup.net/wkdj/d");
const karol_lyd = new Audio("https://sndup.net/qgjq/d");
const emma_lyd = new Audio("https://sndup.net/xmvw/d");

// funktionaliteter
function afspilLyd(lydfil) {
    lydfil.play();
}
function resetLyd(lydfil) {
    lydfil.pause();
    lydfil.currentTime = 0;
}

function PopUp(){
    document.getElementById('popup-1').style.display="none"; 
    }
