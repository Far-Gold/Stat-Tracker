function takeDamage() {
    var currentHP = parseInt(document.getElementById("playerhealth").value);
    var damageReceived = parseInt(prompt("Enter damage received: "));
    var newHP = currentHP - damageReceived;
    if (newHP <= 0) {
        document.getElementById("playerhealth").value = 0
        alert("Player has been defeated!");
    } else {
        document.getElementById("playerhealth").value = newHP;
        alert("Player HP: " + newHP);
    }
}
function incrementStat(stat, operation) {
    var statValue = parseInt(document.getElementById(stat).value);
    var backupValue = statValue;
    if (isNaN(statValue)) {
      statValue = 0;
    }
    var increment = Number(prompt("Enter the amount you want to add or remove:"));
      if (operation === '+') {
        statValue += increment;
      } else {
        statValue -= increment;
      }
  
    if (isNaN(statValue) || statValue === "") {
      statValue = backupValue;
    }
    document.getElementById(stat).value = statValue;
    savePlayerData();
    calculateTotStats();
  }

function calculateTotStats() {
    for (let i = 0; i < statCategory.length; i++) {
        let stat = statCategory[i];
        let playerStat = parseInt(document.getElementById("player" + stat).value);
        let itemStat = parseInt(document.getElementById("item" + stat).value);
        let buffStat = parseInt(document.getElementById("buff" + stat).value);
        let percStat = parseFloat(document.getElementById("percentage" + stat).value);
        let perc2Stat = parseFloat(document.getElementById("percentageM" + stat).value);
        let boosted1 = (playerStat + itemStat + buffStat) * (perc2Stat / 100);
        let boosted2 = playerStat * (percStat / 100);
        //let total = playerStat + itemStat + buffStat + boosted1 + boosted2;
        let total = Math.ceil(playerStat + itemStat + buffStat + boosted1 + boosted2);
        document.getElementById("total" + stat).value = total;
    }
}


setInterval(calculateTotStats, 100)
function levelUp() {
    var playerEXP = parseInt(document.getElementById("playerEXP").value);
    var playerEXPR = parseInt(document.getElementById("playerEXPR").value);
    var playerLevel = parseInt(document.getElementById("playerLevel").value);
    var level = 1 + playerLevel;
    var levelUps = 0;
    playerEXPR = (25 * Math.pow(level, 2)) - (25 * level); // Calculate playerEXPR outside the while loop
    while (playerEXP >= playerEXPR) {
      playerEXP -= (25 * Math.pow(level, 2)) - (25 * level);
      level++;
      playerEXPR = (25 * Math.pow(level, 2)) - (25 * level);
      playerLevel++;
      levelUps++;
    }
    document.getElementById("playerEXP").textContent = playerEXP.toString();
    document.getElementById("playerEXP").value = playerEXP.toString();
    document.getElementById("playerEXPR").textContent = playerEXPR.toString();
    document.getElementById("playerEXPR").value = playerEXPR.toString();
    document.getElementById("playerLevel").value = playerLevel;
    alert("Level Ups: " + levelUps);
  }

