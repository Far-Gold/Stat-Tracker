function generateHtml() {
  var targetElement = document.getElementById('Generated');
  for (let i = 0; i < (statName.length - 0); i++) {
    let name = statName[i];
    var columnDiv = document.createElement('div');
    columnDiv.classList.add('column');
    var h2Element = document.createElement('h2');
    h2Element.classList.add('column-label');
    h2Element.textContent = `${name.charAt(0).toUpperCase() + name.slice(1)} Stats`;
    targetElement.appendChild(columnDiv);
    columnDiv.appendChild(h2Element);
    for (let j = 0; j < statCategory.length; j++) {
      let stat = statCategory[j];
      var containerDiv = document.createElement('div');
      var labelElement = document.createElement('label');
      labelElement.textContent = `${stat.charAt(0).toUpperCase() + stat.slice(1)}`;
      labelElement.classList.add('stat-label'); // Add a custom CSS class for styling
      var inputElement = document.createElement('input');
      inputElement.setAttribute('type', 'number');
      inputElement.setAttribute('id', name + stat);
      inputElement.setAttribute('name', name + stat);
      containerDiv.appendChild(labelElement);
      containerDiv.appendChild(inputElement);
      h2Element.appendChild(containerDiv);
      var brElement = document.createElement('br');
      labelElement.appendChild(brElement);
    }
  }
}
generateHtml()