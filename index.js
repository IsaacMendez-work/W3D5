// Red paragraph in a div
let newP = document.createElement("p");
let node1 = document.createTextNode("Hey, I'm red!");
newP.style.color = "red";
newP.appendChild(node1);
let element = document.getElementById("container");
element.appendChild(newP);

// Blue h3
let newH3 = document.createElement("H3"); 
let node2 = document.createTextNode("I'm a blue h3!"); 
newH3.appendChild(node2); 
newH3.style.color = "cyan"
document.body.appendChild(newH3); 

// New div
let myDiv = document.createElement("DIV"); 
document.getElementById("myDiv").style.border = "thick double green"; 