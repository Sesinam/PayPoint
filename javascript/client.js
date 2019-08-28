window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// setting searchstyle
function searchstyle() {
    document.getElementById('searchtext').style.border="1px solid blue";
}
onmousedown=searchstyle();
  
function searchStyle() {
    document.getElementById('searchtext').style.border="1px solid black";
}
onmouseout=searchStyle();

// move to search page on click of search button
function searchresults() {
    window.location.href="../html/search.html";
}

// image of product to change when mouse hovers
function maizeSwap() {
    document.getElementById('first').src= '../assets/maize1.jpg';
}
function maizeBack() {
    document.getElementById('first').src='../assets/maize.jpg';
}

function riceSwap() {
    document.getElementById('second').src= '../assets/rice1.jpg';
}
function riceBack() {
    document.getElementById('second').src='../assets/rice.jpg';
}

function milletSwap() {
    document.getElementById('third').src= '../assets/millet1.jpg';
}
function milletBack() {
    document.getElementById('third').src='../assets/millet.jpg';
}

function pepperSwap() {
    document.getElementById('fourth').src= '../assets/pepper1.jpg';
}
function pepperBack() {
    document.getElementById('fourth').src='../assets/pepper.jpg';
}

function onionSwap() {
    document.getElementById('fifth').src= '../assets/onion1.jpg';
}
function onionBack() {
    document.getElementById('fifth').src='../assets/onion.jpg';
}

function tomatoSwap() {
    document.getElementById('sixth').src= '../assets/tomato1.jpg';
}
function tomatoBack() {
    document.getElementById('sixth').src='../assets/tomato.jpg';
}

// function to make order form pop up at button click
function openForm() {
    document.getElementById("myForm").style.display = "inline-block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// total value of client order
function Cost() {
    var quantity = document.getElementById('quantity').value;
    var Price = 15
    document.getElementById("totalCharge").innerHTML = quantity * Price;
    
}


// background image slider
var images = ['../assets/contact.jpg', '../assets/book.jpg'];
function changeContactImage(y) {
  document.getElementById("contactgroup").style.backgroundImage = "url(" + images[y] + ")";
  document.getElementById("contactgroup").style.backgroundImage.innerText = images[y];
}
function startTiming() {
  var y = 0;
  changeContactImage(y);
  setInterval(function() {
    y = y + 1 >= images.length ? 0 : y + 1;
    changeContactImage(y);
  }, 3000);
}
startTiming();

// setting the form response for the messages
function proceed() {
    var fn = document.getElementById("fn").value;
    var ln = document.getElementById("ln").value;
    var em = document.getElementById("ea").value;
    var mes = document.getElementById("contactmessage").value;
    event.preventDefault();
    if (fn == "" || ln == "" || em == "" || mes == ""){
      document.getElementById('fn').style.border = "1px solid red";
      document.getElementById('ln').style.border = "1px solid red"; 
      document.getElementById("ea").style.border = "1px solid red";
      document.getElementById("contactmessage").style.border = "1px solid red";
      alert("We will like to here from you, kindly fill the form");
    }else {
      alert("Thank you " + fn+ " " + ln+ " for reaching out to us, your message has been delivered.");
    }
    document.getElementById("contactForm").reset();
    
  };