// function startClick() {
//     console.log("Start clicked");
//     btn.textContent = "Stop";
// }

var btn = document.getElementById("btn");
// btn.textContent = "Stop";
btn.addEventListener('click', function (e){
    console.log(e);
    btn.textContent = ("Stop");
});


var search_bar = document.getElementById("search_bar");
search_bar.value = ("");
search_bar.style.backgroundColor = ("blue");
search_bar.style.color = ("#fffff");

var menu = document.getElementById("menu");
menu.textContent = ("");
