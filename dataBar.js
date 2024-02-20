var dataBar = document.createElement('div');
dataBar.className = 'dataBar';  
let fields = ["id","tytul","system","typ","kategoria"]

fields.forEach((field) => {
let fieldDiv = document.createElement('div');
fieldDiv.id = field;
fieldDiv.innerText = field;
dataBar.appendChild(fieldDiv);
}
)

dataWrapper.appendChild(dataBar
);
