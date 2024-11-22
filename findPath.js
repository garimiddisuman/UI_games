function delay() {
  for (let i = 0; i < 800000000; i++) {
  }
}

function getRandomWay() {
  const randomWay = Math.ceil(Math.random() * 6);

  switch (randomWay) {
    case 1: return "111222233343445455";
    case 2: return "1121222313141525254555";
    case 3: return "11121323333231415152535455";
    case 4: return "111213141525354555";
    case 5: return "112131415152535455";
    case 6: return "112122232434444555";
  }
}

function isAxisMatched(x_path, x_axis, y_path, y_axis) {
  return x_path === x_axis && y_path === y_axis;
}

function isPathCorrect(x, y) {
  for (let i = 0; i < randomWay.length; i += 2) {
    if (isAxisMatched(+randomWay[i], x, +randomWay[i + 1], y)) {
      return true;
    }
  }

  return false;
}

function printInstructions() {
  const instructions = "  d -->  ➡️ \n  s -->  ⬇️ \n  w -->  ⬆️ \n  a -->  ⬅️";
  console.log(instructions + "\n  e -->  exit\n");
}

function isLastBox(i, j) {
  return i === verticalBoxesLength && j === horizontalBoxesLength;
}

function getSymbolForMove(x_pos, y_pos) {
  return isPathCorrect(x_pos, y_pos) ? "👨‍💼" : "💥";
}

function createHorizontalBoxes(i, x_pos, y_pos) {
  let horizontalBox = "";

  for (let j = 1; j <= horizontalBoxesLength; j++) {
    if (i === x_pos && j === y_pos) {
      horizontalBox += getSymbolForMove(x_pos, y_pos);
    }

    else if (isLastBox(i, j)) {
      horizontalBox += "➡️ END";
    } else {
      horizontalBox += "🟦";
    }
  }

  return horizontalBox;
}

function printBox(x_pos, y_pos) {
  let box = "➡️ ";

  for (let i = 1; i <= verticalBoxesLength; i++) {
    box += createHorizontalBoxes(i, x_pos, y_pos) + "\n  ";
  }

  console.log(box);
  printInstructions();
}

function readUserDirection() {
  const direction = prompt("choose direction : ");

  return direction;
}

function changePosition(x, y) {
  if (!isPathCorrect(x, y)) {
    printBox(x, y)
    delay();
    console.clear();
    x = 1; y = 1;
  }

  printBox(x, y);
  const direction = readUserDirection();
  console.clear();

  switch (direction) {
    case "d": y += 1; break;
    case "s": x += 1; break;
    case "w": x -= 1; break;
    case "a": y -= 1; break;
    case "e": return;
  }

  startGame(x, y);
}

function startGame(x, y) {
  if (verticalBoxesLength === x && horizontalBoxesLength === y) {
    console.log("\n ---- YOU REACHED THE DESTINATION ----\n");
    return;
  }

  changePosition(x, y);
}

const verticalBoxesLength = 5;
const horizontalBoxesLength = 5;
const randomWay = getRandomWay();

/*--------------------------------- FRAME WORK -------------------------------*/
console.log("\n*--------------------* 𝓦 𝓔 𝓛 𝓒 𝓞 𝓜 𝓔  𝓣 𝓞   𝓕 𝓘 𝓝 𝓓   𝓟 𝓐 𝓣 𝓗  *-----------------------*\n");
console.log("  -------------* Game Instructions *----------------- \n");
console.log("  --> There is only one way is correct, your target is to find the path.");
console.log("  --> if there is a bomb. it will go to intial position.\n");
const canStart = confirm('  ⭐️ can we start the game ?');
console.log("\n");
/*----------------------------------------------------------------------------*/

if (canStart) {
  startGame(1, 1);
}

console.log("    BYE see you next time      \n");
