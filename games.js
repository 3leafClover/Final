var navWords = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[2];


var title = document.getElementById("title");



navWords.style.backgroundColor = "rgb(255, 53, 245)";



function reset(){
    localStorage.setItem("check1","not game 1 won");
    localStorage.setItem("check2","not game 2 won");
    localStorage.setItem("check3","not game 3 won");
    console.log(localStorage.getItem("check1"))
}
