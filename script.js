tInterval = setInterval(setColor, 1000);



function setColor(){
let x = document.body;                                // whitespace if,  else.
x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "green" : "yellow";
}
