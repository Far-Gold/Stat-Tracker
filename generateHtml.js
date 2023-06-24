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
      labelElement.classList.add('stat-label');
      var inputContainer = document.createElement('div'); // Separate container for input and buttons
      var inputElement = document.createElement('input');
      inputElement.setAttribute('type', 'number');
      inputElement.setAttribute('id', name + stat);
      inputElement.setAttribute('name', name + stat);
      var incrementButton = document.createElement('button');
      incrementButton.setAttribute('type', 'button');
      incrementButton.textContent = '+';
      incrementButton.addEventListener('click', function() {
        incrementStat(`${name + stat}`, '+');
      });
      var decrementButton = document.createElement('button');
      decrementButton.setAttribute('type', 'button');
      decrementButton.textContent = '-';
      decrementButton.addEventListener('click', function() {
        incrementStat(`${name + stat}`, '-');
      });
      inputContainer.appendChild(inputElement);
      inputContainer.appendChild(incrementButton);
      inputContainer.appendChild(decrementButton);
      containerDiv.appendChild(labelElement);
      containerDiv.appendChild(inputContainer); // Append the input container
      h2Element.appendChild(containerDiv);
      var brElement = document.createElement('br');
      labelElement.appendChild(brElement);
    }
  }
}
generateHtml()