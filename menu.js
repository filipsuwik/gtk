var menu = document.createElement("div");
menu.id = "menu";

menu.style.display = 'flex';

var textsButton = document.createElement("button");
textsButton.id = "textsButton";
textsButton.innerText = "komunikaty";

menu.appendChild(textsButton);

wrapper.appendChild(menu);
