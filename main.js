let row1 = document.getElementsByClassName("row1");

function background(){
    row1[0].style.backgroundColor = "rbg(0, 255, 0, .5)";
}

row1[0].addEventListener("click", background);