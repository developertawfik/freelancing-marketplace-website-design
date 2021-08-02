const searchBar = document.querySelector(".search_bar input"),
    searchBtn = document.querySelector(".search_bar button")

searchBtn.onclick = () => {
    searchBar.classList.toggle("active")
    searchBar.focus();
    searchBtn.classList.toggle("active")
    searchBar.value = "";
}


var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("user");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
