var sysWrapper = document.createElement("div");
sysWrapper.className = "filteredSystems";

systemsSection.id = 'systemsSection';
toolbar.appendChild(systemsSection);

var sysSearchlabel = document.createElement("label");
sysSearchlabel.for = "systemsSearch";
sysSearchlabel.innerText = "znajdź system";
sysSearchlabel.className = "labels";


var sysSearchInput = document.createElement("input");
sysSearchInput.id = "systemsSearch";
sysSearchInput.type = "search";
sysSearchInput.placeholder = "Szukaj";
sysSearchInput.list = "systemsSearchList";
sysSearchInput.style.backgroundColor = '#f4f1f1';
sysSearchInput.style.border="none";

sysSearchInput.oninput = function () {
  sysSearchInput.nextElementSibling.remove();
  sysSearchInput.onblur = function () {
  if (sysSearchInput.nextElementSibling) {
    sysSearchInput.nextElementSibling.remove();
  }
}

  var filteredResults = document.createElement("div");
  filteredResults.id = "filteredResults";
  filteredResults.className = "filteredSystems";
  filteredResults.style.transformStyle="preserve-3d";
  filteredResults.style.boxShadow="0px 3px 10px 5px rgb(128,128,128,0.3)";
  filteredResults.style.borderRadius="10px";
  filteredResults.style.overflow="hidden";
  systems.forEach(function (system) {
    if (system.toLowerCase().includes(sysSearchInput.value.toLowerCase())) {
      var sys = document.createElement("div");
      sys.className = "filteredSystems";
      sys.innerText = system;
      sys.style.transformZ="5px";
      sys.style.paddingBottom="5px"
      sys.style.paddingTop="5px"
      sys.style.paddingLeft="1em"
    
      

     
    
      filteredResults.appendChild(sys);
    }
  });

  sysWrapper.appendChild(filteredResults);

  if (sysSearchInput.nextElementSibling && sysSearchInput.value == "") {
    sysSearchInput.nextElementSibling.replaceChildren();
  }
};
var sysSearchList = document.createElement("datalist");
sysSearchList.id = "systemsSearchList";



sysWrapper.appendChild(sysSearchlabel);
sysWrapper.appendChild(sysSearchInput);
sysWrapper.appendChild(sysSearchList);
systemsSection.appendChild(sysWrapper);
toolbar.appendChild(systemsSection);
