var list = document.createElement("div");
list.id = "list";

async function getData() {
    let response = await fetch('data.csv');
    let data = await response.text();
   let str = data.split('\n');
   let separator = str[0].includes('sep=') ? str[0] : ',';
   let arr = [];

    for (let i = 1; i < str.length; i++) {
        let row = str[i].split(separator);
        let obj = {};
        for (let j = 0; j < row.length; j++) {
            obj[str[0].split(separator)[j]] = row[j];
        }
        arr.push(obj);
    }
    console.log(arr);
    arr.forEach((data) => {
        let dataDiv = document.createElement('div');    
        dataDiv.className = 'dataBar';
        let fields = Object.keys(data);
        fields.forEach((field) => {
            let fieldDiv = document.createElement('div');
            fieldDiv.id = field;
            fieldDiv.innerText = data[field];
            dataDiv.appendChild(fieldDiv);
        }



        )
    
        list.appendChild(dataDiv);
    
     
    }
    )
  

}

getData();


dataWrapper.appendChild(list);

