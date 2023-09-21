var nav = document.getElementsByTagName("nav")[0];
var body = document.getElementsByTagName("body")[0];
var navWords = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[1];
var mButton = document.getElementById("menu_button");
var menu = document.getElementById("menu");
var prof = document.getElementById("profile");
var img = document.getElementById("profile").getElementsByTagName("img")[0];
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var name_input = document.getElementById("name")
var description_input=document.getElementById("description")
var badge_holder=document.getElementById("badge_holder")
var badge1=document.getElementById("badge1")

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var bMenu = document.getElementById("button_menu");

submission = document.getElementById("submission")
var picButton = document.getElementById("submission").getElementsByTagName("button")[0];
var pfp = document.getElementById("profilePicture");
var pfpUrl = document.getElementById("profileURL");

navWords.style.backgroundColor = "rgb(255, 53, 245)";

var badge1=document.getElementById("badge1")
var badge2=document.getElementById("badge2")
var badge3=document.getElementById("badge3")

name_input.addEventListener("change",(event)=>{
  localStorage.setItem("saved_name",event.target.value)
})

description_input.addEventListener("change",(event)=>{
  localStorage.setItem("saved_description",event.target.value)
})

name_input.value=localStorage.getItem("saved_name")||""
description_input.value=localStorage.getItem("saved_description")||""

var x = 0;

mButton.addEventListener("click", pull);
mButton.addEventListener("mouseover", rotateF);
mButton.addEventListener("mouseleave", unrotateF);

picButton.addEventListener("mouseover", rotateF);
picButton.addEventListener("mouseleave", unrotateF);


function changeProfilePicture() {
  var newUrl = pfpUrl.value;
  pfp.src = newUrl;
  localStorage.setItem("profilePictureUrl", newUrl);
}
window.addEventListener("load", function() {
  var storedUrl = localStorage.getItem("profilePictureUrl");
  if (storedUrl) {
    pfp.src = storedUrl;
    pfpUrl.value = storedUrl;
  }
});

picButton.addEventListener("click", changeProfilePicture);


function pull() {
  if (x == 0) {
    menu.style.animationName = "pullup";
    menu.style.animationFillMode = "forwards";
    menu.style.animationDuration = "0.7s";
    x = x + 1;
  } else if (x == 1) {
    menu.style.animationName = "pulldown";
    menu.style.animationFillMode = "forwards";
    menu.style.animationDuration = "1s";
    x = 0;
  }
}

function rotateF() {
  mButton.style.animationName = "rotate";
  mButton.style.animationDuration = "0.5s";
  mButton.style.animationIterationCount = "1";
  mButton.style.animationFillMode = "forwards";
}

function unrotateF() {
  mButton.style.animationName = "unrotate";
  mButton.style.animationDuration = "0.5s";
  mButton.style.animationIterationCount = "1";
  mButton.style.animationFillMode = "forwards";
}

btn1.addEventListener("click", function() {
  changeTheme(1);
});

btn2.addEventListener("click", function() {
  changeTheme(2);
});

btn3.addEventListener("click", function() {
  changeTheme(3);
});

btn4.addEventListener("click", function() {
  changeTheme(4);
});


function changeTheme(themeNumber) {
  if (themeNumber === 1) {
    change1();
  } else if (themeNumber === 2) {
    change2();
  } else if (themeNumber === 3) {
    change3();
  } else if (themeNumber === 4) {
    change4();
  }
  localStorage.setItem("themeNumber", themeNumber);
}

window.addEventListener("load", function() {
  var storedThemeNumber = localStorage.getItem("themeNumber");
  if (storedThemeNumber) {
    var parsedThemeNumber = parseInt(storedThemeNumber);
    changeTheme(parsedThemeNumber);
  }
});

var check1 = window.localStorage.getItem("check1");
var check2 = window.localStorage.getItem("check2");
var check3 = window.localStorage.getItem("check3");

if (check1 === "game 1 won") {
  console.log(check1);
  badge1.style.opacity = "100%";
}
if (check2 === "game 2 won") {
  console.log(check2);
  badge2.style.opacity = "100%";
}
if (check3 === "game 3 won") {
  console.log(check3);
  badge3.style.opacity = "100%";
}




function change1() {
  nav.style.backgroundColor = "rgb(95, 11, 95)";
  navWords.style.backgroundColor = "rgb(255, 53, 245)";
  nav.style.border = "4px solid rgb(255, 26, 255)";
  body.style.backgroundColor = "rgb(2, 0, 27)";
  nav.style.boxShadow = "0px 5px 10px rgb(29, 89, 255)";
  navWords.style.boxShadow = "0px 0px 10px rgb(29, 89, 255)";
  mButton.style.backgroundColor = "rgb(255, 53, 245)";
  mButton.style.boxShadow = "0px 0px 15px rgb(29, 89, 255)";
  bMenu.style.boxShadow = "0px 0px 15px rgb(29, 89, 255)";
  bMenu.style.border = "4px solid rgb(255, 26, 255)";
  bMenu.style.backgroundColor = "rgb(95, 11, 95)";

  img.style.border = "4px solid rgb(255, 26, 255)";
  img.style.boxShadow = "0px 0px 15px rgb(29, 89, 255)";
  title.style.border="4px solid rgb(255, 26, 255)";
  title.style.boxShadow = "0px 0px 15px rgb(29, 89, 255)";
  title.style.backgroundColor = "rgb(95, 11, 95)";
  desc.style.border="4px solid rgb(255, 26, 255)";
  desc.style.boxShadow = "0px 0px 15px rgb(29, 89, 255)";
  desc.style.backgroundColor = "rgb(95, 11, 95)";

  picButton.style.boxShadow = "0px 0px 10px rgb(29, 89, 255)";
  picButton.style.backgroundColor = "rgb(255, 53, 245)";
  submission.style.border="4px solid rgb(255, 26, 255)";
  submission.style.boxShadow = "0px 0px 15px rgb(29, 89, 255)";
  submission.style.backgroundColor = "rgb(95, 11, 95)";

  badge_holder.style.border = "4px solid rgb(255, 26, 255)";
  badge_holder.style.boxShadow = "0px 0px 15px rgb(29, 89, 255)";
  badge_holder.style.backgroundColor = "rgb(95, 11, 95)";
}

function change2() {
  nav.style.backgroundColor = "black";
  navWords.style.backgroundColor = "white";
  nav.style.border = "4px solid white";
  body.style.backgroundColor = "rgb(20,20,20)";
  nav.style.boxShadow = "0px 5px 10px white";
  navWords.style.boxShadow = "0px 0px 10px white";
  mButton.style.backgroundColor = "white";
  mButton.style.boxShadow = "0px 0px 15px white";
  bMenu.style.boxShadow = "0px 0px 15px white";
  bMenu.style.border = "4px solid white";
  bMenu.style.backgroundColor = "black";

  img.style.border = "4px solid white";
  img.style.boxShadow = "0px 0px 15px white";
  title.style.border="4px solid white";
  title.style.boxShadow = "0px 0px 15px white";
  title.style.backgroundColor = "rgb(120,120,120)";
  desc.style.border="4px solid white";
  desc.style.boxShadow = "0px 0px 15px white";
  desc.style.backgroundColor = "rgb(150,150,150)";

  picButton.style.boxShadow = "0px 0px 10px white";
  picButton.style.backgroundColor = "white";
  submission.style.border = "4px solid white";
  submission.style.boxShadow = "0px 0px 15px white";
  submission.style.backgroundColor = "rgb(120, 120, 120)";

  badge_holder.style.border = "4px solid white";
  badge_holder.style.boxShadow = "0px 0px 15px white";
  badge_holder.style.backgroundColor = "rgb(120, 120, 120)";
}

function change3() {
  nav.style.backgroundColor = "black";
  navWords.style.backgroundColor = "orange";
  nav.style.border = "4px solid orange";
  body.style.backgroundColor = "rgb(7, 10, 25)";
  nav.style.boxShadow = "0px 5px 10px orange";
  navWords.style.boxShadow = "0px 0px 10px orange";
  mButton.style.backgroundColor = "orange";
  mButton.style.boxShadow = "0px 0px 15px orange";
  bMenu.style.boxShadow = "0px 0px 15px orange";
  bMenu.style.border = "4px solid orange";
  bMenu.style.backgroundColor = "black";

  img.style.border = "4px solid orange";
  img.style.boxShadow = "0px 0px 15px orange";
  title.style.border="4px solid orange";
  title.style.boxShadow = "0px 0px 15px orange";
  title.style.backgroundColor = "rgb(142, 100, 0)";
  desc.style.border="4px solid orange";
  desc.style.boxShadow = "0px 0px 15px orange";
  desc.style.backgroundColor = "rgb(142, 100, 0)";
  
  picButton.style.boxShadow = "0px 0px 10px orange";
  picButton.style.backgroundColor = "orange";
  submission.style.border = "4px solid orange";
  submission.style.boxShadow = "0px 0px 15px orange";
  submission.style.backgroundColor = "rgb(142, 100, 0)";

  badge_holder.style.border = "4px solid orange";
  badge_holder.style.boxShadow = "0px 0px 15px orange";
  badge_holder.style.backgroundColor = "rgb(142, 100, 0)";
}

function change4() {
  nav.style.backgroundColor = "black";
  navWords.style.backgroundColor = "orange";
  nav.style.border = "4px solid orange";
  body.style.backgroundColor = "rgb(7, 10, 25)";
  nav.style.boxShadow = "0px 5px 10px orange";
  navWords.style.boxShadow = "0px 0px 10px orange";
  mButton.style.backgroundColor = "orange";
  mButton.style.boxShadow = "0px 0px 15px orange";
  bMenu.style.boxShadow = "0px 0px 15px orange";
  bMenu.style.border = "4px solid orange";
  bMenu.style.backgroundColor = "black";

  img.style.border = "4px solid orange";
  img.style.boxShadow = "0px 0px 15px orange";
  title.style.border="4px solid orange";
  title.style.boxShadow = "0px 0px 15px orange";
  title.style.backgroundColor = "rgb(142, 100, 0)";
  desc.style.border="4px solid orange";
  desc.style.boxShadow = "0px 0px 15px orange";
  desc.style.backgroundColor = "rgb(142, 100, 0)";
  
  picButton.style.boxShadow = "0px 0px 10px orange";
  picButton.style.backgroundColor = "orange";
  submission.style.border = "4px solid orange";
  submission.style.boxShadow = "0px 0px 15px orange";
  submission.style.backgroundColor = "rgb(142, 100, 0)";
}
