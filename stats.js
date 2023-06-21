var statCategory = [ "HP", "MP", "STM", "STR", "ERGY", "SPD", "PDEF", "MDEF", "BEL", "DEX", "PER", "STL", "LCK", "PDMG", "RDMG", "MDMG" ];
var statName = ["player", "item", "buff", "perc", "perc2"];

function getInputElementId(name, stat) {
    return name + stat;
  }
  // Function to save player data to local storage
  function savePlayerData() {
    // Save player variables
    localStorage.setItem("playerName", document.getElementById("playerName").value);
    localStorage.setItem("playerTitle", document.getElementById("playerTitle").value);
    localStorage.setItem("playerClass", document.getElementById("playerClass").value);
    localStorage.setItem("playerCoins", document.getElementById("playerCoins").value);
    localStorage.setItem("playerLevel", document.getElementById("playerLevel").value);
    localStorage.setItem("playerEXP", document.getElementById("playerEXP").value);
    localStorage.setItem("playerEXPR", document.getElementById("playerEXPR").value);
    localStorage.setItem("playerParty", document.getElementById("playerParty").value);
    localStorage.setItem("playerKAR", document.getElementById("playerKAR").value);
    localStorage.setItem("itemW", document.getElementById("itemW").value);
  
    for (let i = 0; i < statCategory.length; i++) {
      let stat = statCategory[i];
      for (let j = 0; j < statName.length; j++) {
        let name = statName[j];
        let value = parseInt(document.getElementById(getInputElementId(name, stat)).value);
  
        // Update the value in the HTML document
        document.getElementById(getInputElementId(name, stat)).value = value;
  
        // Save the value to local storage
        localStorage.setItem(getInputElementId(name, stat), value);
      }
    }
  }
  
  // Function to load player data from local storage
  function loadPlayerData() {
    // Load player variables from local storage
    document.getElementById("playerName").value = localStorage.getItem("playerName");
    document.getElementById("playerTitle").value = localStorage.getItem("playerTitle");
    document.getElementById("playerClass").value = localStorage.getItem("playerClass");
    document.getElementById("playerCoins").value = localStorage.getItem("playerCoins");
    document.getElementById("playerLevel").value = localStorage.getItem("playerLevel");
    document.getElementById("playerEXP").value = localStorage.getItem("playerEXP");
    document.getElementById("playerEXPR").value = localStorage.getItem("playerEXPR");
    document.getElementById("playerEXP").textContent = localStorage.getItem("playerEXP");
    document.getElementById("playerEXPR").textContent = localStorage.getItem("playerEXPR");
    document.getElementById("playerParty").value = localStorage.getItem("playerParty");
    document.getElementById("playerKAR").value = localStorage.getItem("playerKAR");
    document.getElementById("itemW").value = localStorage.getItem("itemW");
  
    for (let i = 0; i < statCategory.length; i++) {
      let stat = statCategory[i];
      for (let j = 0; j < statName.length; j++) {
        let name = statName[j];
        // Load player stat values from local storage
        document.getElementById(getInputElementId(name, stat)).value = localStorage.getItem(getInputElementId(name, stat));
      }
    }
  }
  
  function resetStats() {
    for (let i = 0; i < statCategory.length; i++) {
      let stat = statCategory[i];
      for (let j = 0; j < statName.length; j++) {
        let name = statName[j];
        document.getElementById(getInputElementId(name, stat)).value = 0;
      }
    }
    document.getElementById("playerLevel").value = 1;
    document.getElementById("playerEXP").value = 0;
    document.getElementById("playerEXPR").value = 50;
    document.getElementById("playerEXP").textContent = 0;
    document.getElementById("playerEXPR").textContent = 50;
    document.getElementById("playerCoins").value = 0;
    document.getElementById("playerKAR").value = 0;
    document.getElementById("itemW").value = 0;
  }