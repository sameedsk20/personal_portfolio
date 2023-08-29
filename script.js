var typed = new Typed('#element', {
    strings: ['Web Developer', 'Data Entry Operator', 'Content Writer'],
    typeSpeed: 90,
    loop: true,
});
var tabLinks = document.getElementsByClassName("tabLinks");
var tabContents = document.getElementsByClassName("tabContents");
function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("activeLink");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("activeLink");
    document.getElementById(tabName).classList.add("activeTab");
}

//DATA TO GOOGLE SHEETS

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxdIFjdTFJLZ63C2vwJuck4hRtx6jGYN7GBE2b2CtJX7xI6c1fT-VORaYC__BNP5WOU2Q/exec'
  const form = document.forms['submit-to-google-sheet']
  const alert = document.getElementById("alert");



  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        alert.innerHTML="Response has been registered..."
        setTimeout(function(){
            msg.innerHTML = ""
        },500)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })

// FOR DISPLAYING ON SCROLL

window.addEventListener("scroll",reveal);

function reveal(){

var reveals = document.querySelectorAll('.reveal');

for(var i = 0 ; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener("scroll",revealXR);

function revealXR(){

var reveals = document.querySelectorAll('.revealXR');

for(var i = 0 ; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }
  }
}

// COLOR CHANGE FUNCTION

var colorChangeNum = 0 ;
var changingColor = document.querySelector('.changingColor');
var bodyColor = document.querySelector('.body');

function colorChange(){
    if(colorChangeNum == 0){
        changingColor.classList.add('active');
        bodyColor.classList.add('active');
        colorChangeNum = 1 ;
    }
    else{
        changingColor.classList.remove('active');
        bodyColor.classList.remove('active');
        colorChangeNum = 0 ;
    }
}