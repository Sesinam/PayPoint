// setting the page to go to top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// changing the page title 
function titleChange() {
  document.title = "Pay Point|About";
};

function titleChanges() {
  document.title="Pay Point|Contact Us";
};

// setting background image to slide
var backImage = ['../assets/homepicture.jpg', '../assets/pay.jpg'];

function changeBackImage(x) {
  document.getElementById("homefield").style.backgroundImage = "url(" + backImage[x] + ")";
  document.getElementById("homefield").style.backgroundImage.innerText = backImage[x];
}
function startTimer() {
  var x = 0;
  changeBackImage(x);
  setInterval(function() {
    x = x + 1 >= backImage.length ? 0 : x + 1;
    changeBackImage(x);
  }, 3000);
}
startTimer();

// setting scroll behaviour
const btn = document.getElementById('about');
btn.addEventListener('click', () => window.scrollBy({
  top: 600,
  behavior: 'auto',
}));

const Btn = document.getElementById('contact');
Btn.addEventListener('click', () => window.scrollBy({
  top: 1000,
  behavior: 'auto',
}));

// move to search page on click of search button
function searchresults() {
  window.location.href="../html/search.html";
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

// setting background image slider for contact section
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
// setting the page to go to top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// changing the page title 
function titleChange() {
  document.title = "Pay Point|About";
};

function titleChanges() {
  document.title="Pay Point|Contact Us";
};

// setting background image to slide
var backImage = ['../assets/homepicture.jpg', '../assets/pay.jpg'];

function changeBackImage(x) {
  document.getElementById("homefield").style.backgroundImage = "url(" + backImage[x] + ")";
  document.getElementById("homefield").style.backgroundImage.innerText = backImage[x];
}
function startTimer() {
  var x = 0;
  changeBackImage(x);
  setInterval(function() {
    x = x + 1 >= backImage.length ? 0 : x + 1;
    changeBackImage(x);
  }, 3000);
}
startTimer();

// setting scroll behaviour
const btn = document.getElementById('about');
btn.addEventListener('click', () => window.scrollBy({
  top: 600,
  behavior: 'auto',
}));

const Btn = document.getElementById('contact');
Btn.addEventListener('click', () => window.scrollBy({
  top: 1000,
  behavior: 'auto',
}));

// move to search page on click of search button
function searchresults() {
  window.location.href="../html/search.html";
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

// setting background image slider for contact section
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
