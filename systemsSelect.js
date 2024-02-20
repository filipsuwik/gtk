var systemSelect= document.createElement('select');
systemSelect.id = 'systemsSelect';
systemSelect.name = 'systemsSelect';
systemSelect.style.backgroundColor = '#f4f1f1';
systemSelect.style.border="none";
var systemSelectLabel = document.createElement('label');
systemSelectLabel.for = 'systemsSelect';
systemSelectLabel.innerText = 'Wybierz system';
systemSelectLabel.className = 'labels';
var or = document.createElement('span');
or.style.color = "#2da343";
or.style.marginTop = "15px";
or.style.width = "30px";
or.innerText = 'lub';


async function getSystems() {
    const response = await fetch('data.csv');
    const data = (await response.text()).toLowerCase();
    
    let str = data.split('\n');

    const separator = str[0].includes('sep=') ? str[0] : ',';
    const arr = [];
    const systems = [];
    for (let i = 1; i < str.length; i++) {
        const row = str[i].split(separator);
        const obj = {};
        for (let j = 0; j < row.length; j++) {
            obj[str[0].split(separator)[j]] = row[j];
        }
        arr.push(obj);
     
    }
    arr.forEach((obj) => {
        if (!systems.includes(obj.system)) {
            systems.push(obj.system);
        }
      
    }
    )
console.log(systems);
    systems.forEach((system) => {
        const option = document.createElement('option');
        option.value = system;
        option.text = system;
        systemSelect.appendChild(option);
    }
    )

        
        systemSelect.appendChild(option);

}



getSystems();







var systemSelectWrapper = document.createElement('div');
systemSelectWrapper.onclick = function () {
systemSelect.focus(); };
systemSelectWrapper.className = 'filteredSystems';
systemSelectWrapper.appendChild(systemSelectLabel);
systemSelectWrapper.appendChild(systemSelect);

systemsSection.appendChild(systemSelectWrapper);
systemsSection.appendChild(or);

toolbar.appendChild(systemsSection);


