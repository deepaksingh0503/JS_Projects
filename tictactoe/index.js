console.log("Hello darling i am in!!");
let chance = 1;
let count = 0;
let gridButtonArray = [];
let winnerDecleared = false;
let winnerText = document.getElementById("winner");
let resetButton = document.getElementById("resetButton");
const checkCanMark = (index) => {
  let gridButton = gridButtonArray[index];
  if (gridButton.innerHTML != "" && gridButton.innerHTML != undefined) {
    return false;
  }
  return true;
};

const markGrid = (index) => {
  let gridButton = gridButtonArray[index];
  if (chance == 1) {
    gridButton.innerHTML = "X";
    winnerText.innerHTML = "0 ki bari bhai bhai";
    chance = !chance;
  } else {
    gridButton.innerHTML = "0";
    winnerText.innerHTML = "X ki bari bhai bhai";
    chance = !chance;
  }
};

const checkWinner = () => {
  let innervalue = [];
  for (let i = 0; i < 9; i++) {
    let mark = gridButtonArray[i].innerHTML;
    innervalue.push(mark);
  }
  if (innervalue[0] == innervalue[1] && innervalue[1] == innervalue[2]) {
    return innervalue[0];
  } else if (innervalue[3] == innervalue[4] && innervalue[4] == innervalue[5]) {
    return innervalue[3];
  } else if (innervalue[6] == innervalue[7] && innervalue[7] == innervalue[8]) {
    return innervalue[6];
  } else if (innervalue[0] == innervalue[3] && innervalue[3] == innervalue[6]) {
    return innervalue[0];
  } else if (innervalue[1] == innervalue[4] && innervalue[4] == innervalue[7]) {
    return innervalue[1];
  } else if (innervalue[2] == innervalue[5] && innervalue[5] == innervalue[8]) {
    return innervalue[2];
  } else if (innervalue[0] == innervalue[4] && innervalue[4] == innervalue[8]) {
    return innervalue[0];
  } else if (innervalue[2] == innervalue[4] && innervalue[4] == innervalue[6]) {
    return innervalue[2];
  }
  return undefined;
};

resetButton.addEventListener("click", () => {
  winnerText.innerHTML = "X ki bari hai bhai!!";
  chance = 1;
  winnerDecleared = false;
  count = 0;
  for (let i = 0; i < 9; i++) {
    gridButtonArray[i].innerHTML = "";
  }
});

for (let i = 0; i < 9; i++) {
  let gridButton = document.getElementById(`girdbox${i}`);
  gridButton.addEventListener("click", (e) => {
    let check = checkCanMark(i);
    if (check && !winnerDecleared) {
      ++count;
      console.log(count);
      markGrid(i);
      let winner = checkWinner();
      if (count == 9) {
        winnerText.innerHTML = `Match Draw kar diye chutiyee!`;
      }
      if (winner != undefined && winner != "") {
        winnerText.innerHTML = ` ${winner} jeet gya bhaii!!`;
        winnerDecleared = true;
      }
    }
  });
  gridButtonArray.push(gridButton);
}

winnerText.innerHTML = "X ki bari bhai bhai";
