var typesSelect = document.createElement('select');
typesSelect.id = 'typesSelect';
typesSelect.name = 'typesSelect';
typesSelect.style.border="none";

var types = ["incydent","informacja","inny"];
for (var i = 0; i < types.length; i++) {
    var option = document.createElement('option');
    option.value = types[i];
    option.text = types[i];
    typesSelect.appendChild(option);
}

var typesSelectLabel = document.createElement('label');
typesSelectLabel.for = 'typesSelect';
typesSelectLabel.innerText = 'Wybierz typ';
typesSelectLabel.className = 'labels';

var typesSelectWrapper = document.createElement('div');
typesSelectWrapper.style.border="1px solid #2da343";
typesSelectWrapper.style.overflow="hidden";
typesSelectWrapper.className = 'filteredSystems';
typesSelectWrapper.appendChild(typesSelectLabel);
typesSelectWrapper.appendChild(typesSelect);
toolbar.appendChild(typesSelectWrapper);