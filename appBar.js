var appBar = document.createElement('div');
appBar.id = 'appBar';

var icon = document.createElement('img');

icon.src = 'menu.svg';
icon.id = 'menuIcon';
icon.onclick = function() {
menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
mainWindow.style.width = menu.style.display === 'flex' ? mainWindow.style.width = '85%' : mainWindow.style.width = '100%';
};

appBar.appendChild(icon);

app.appendChild(appBar);