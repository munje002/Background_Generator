var css=document.querySelector("h3");
var color1=document.querySelector(".Color1");
var color2=document.querySelector(".Color2");
var body=document.getElementById("Gr");

function changeColorMouse()
{
    body.style.background =
    "linear-gradient(to right,"
    + color1.value 
    + ", "
    + color2.value
    ")";
    css.textContent= body.style.background+ ";";
}
color1.addEventListener("input",changeColorMouse)
color2.addEventListener("input",changeColorMouse)

