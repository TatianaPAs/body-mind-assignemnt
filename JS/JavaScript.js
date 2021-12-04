
//function to load navigation menu to the header

window.onload = function () {
    var xmlhttp;
    var i = document.getElementById("menu");

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "menu.html", false);
    xmlhttp.send();
    i.innerHTML = xmlhttp.responseText;
}



