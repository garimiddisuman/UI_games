console.log("\n*------------------------------------------------ 🐍 SNAKE AND LADDER 🪜 -----------------------------------------------------*\n");

const name1 = prompt("enter player1 name :");
const name2 = prompt("enter player2 name :");

function snake(position) {
  switch (position) {
    case 37: return 3;
    case 28: return 10;
    case 48: return 16;
    case 75: return 32;
    case 94: return 71;
    case 96: return 42;
  }
}

function ladder(position) {
  switch (position) {
    case 4: return 56;
    case 12: return 50;
    case 14: return 55;
    case 22: return 58;
    case 41: return 79;
    case 54: return 88;
  }
}

function isPositionSnake(position) {
  const isSnake = position === 37 || position === 28 || position === 48;

  return isSnake || position === 75 || position === 94 || position === 96;
}

function isPositionLadder(position) {
  const isLadder = position === 4 || position === 12 || position === 14;

  return isLadder || position === 22 || position === 41 || position === 54;
}

function getCurrentPosition(player, position) {
  if (isPositionSnake(position)) {
    console.log("-- snake 🐍 --");
    return snake(position);
  }

  if (isPositionLadder(position)) {
    console.log("-- ladder 🪜 --");
    return ladder(position);
  }

  return position > 100 ? player : position;
}

function getWinnerBanner(name) {
  return "\n --- CONGRATULATIONS! '" + name + "', YOU WON..🏆 --- \n";
}

function makeMassage(name, player) {
  prompt("\n" + name + " chance : press enter ");
  const rolledNumber = Math.ceil(Math.random() * 6);
  const playerScore = +prompt(name + " TokenForward :", rolledNumber);

  return getCurrentPosition(player, player + playerScore);
}

function snakeAndLadder(player1, player2, name1, name2) {
  if (player2 === 100) {
    return getWinnerBanner(name2);
  }

  player1 = makeMassage(name1, player1)
  console.log(name1, "current_Positon :", player1);

  if (player1 === 100) {
    return getWinnerBanner(name1);
  }

  player2 = makeMassage(name2, player2);
  console.log(name2, "current_position :", player2);

  return snakeAndLadder(player1, player2, name1, name2);
}

console.log(snakeAndLadder(0, 0, name1, name2));