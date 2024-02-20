var searchInput = document.createElement('input');
searchInput.id = 'searchInput';
searchInput.type = 'search';
searchInput.placeholder = 'Szukaj';
searchInput.style.backgroundColor = '#f4f1f1';
searchInput.style.width = '100%';

var searchInputLabel = document.createElement('label');
searchInputLabel.for = 'searchInput';
searchInputLabel.innerText = 'wyszukaj frazę';
searchInputLabel.className = 'labels';



var searchWrapper = document.createElement('div');
searchWrapper.onclick = function () {
    searchInput.focus(); };
searchWrapper.className = 'filteredSystems';
searchWrapper.style.backgroundColor = '#f4f1f1';
searchWrapper.style.border="1px solid #2da343";
searchWrapper.style.overflow="hidden";
searchWrapper.style.flexBasis="22%"
searchWrapper.appendChild(searchInputLabel);
searchWrapper.appendChild(searchInput); 





toolbar.appendChild(searchWrapper);

