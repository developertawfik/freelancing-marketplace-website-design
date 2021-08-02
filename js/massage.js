const searchBar = document.querySelector(".search_bar input"),
    searchBtn = document.querySelector(".search_bar button")

searchBtn.onclick = () => {
    searchBar.classList.toggle("active")
    searchBar.focus();
    searchBtn.classList.toggle("active")
    searchBar.value = "";
}
