var categorySelect = document.createElement('select');
categorySelect.id = 'categorySelect';
categorySelect.name = 'categorySelect';
categorySelect.style.border="none";

var categories = ["poczatek","koniec","informacja"];

for (var i = 0; i < categories.length; i++) {

    var option = document.createElement('option');
    option.value = categories[i];
    option.text = categories[i];
    categorySelect.appendChild(option);
}

var categorySelectLabel = document.createElement('label');
categorySelectLabel.for = 'categorySelect';
categorySelectLabel.innerText = 'Wybierz kategorie';

categorySelectLabel.className = 'labels';

var categorySelectWrapper = document.createElement('div');
categorySelectWrapper.style.border="1px solid #2da343";
categorySelectWrapper.style.overflow="hidden";
categorySelectWrapper.className = 'filteredSystems';
categorySelectWrapper.onclick = function () {
    categorySelect.focus(); };
categorySelectWrapper.appendChild(categorySelectLabel);
categorySelectWrapper.appendChild(categorySelect);

toolbar.appendChild(categorySelectWrapper);

