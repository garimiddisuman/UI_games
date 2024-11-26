console.log("\n*------------------------------------------------ 🐍 SNAKE AND LADDER 🪜 -----------------------------------------------------*\n");

const EMPTY = "┃      ┃";
const TWO_DOTS = "┃⚪️  ⚪️┃";
const ONE_LEFT = "┃⚪️    ┃";
const ONE_MIDDLE = "┃  ⚪️  ┃";
const ONE_RIGHT = "┃    ⚪️┃";

function repeat(char, times) {
  let string = "";

  for (let i = 0; i < times; i++) {
    string += char;
  }
  return string;
}

function topBorder() {
  return "╭" + repeat("━", 6) + "╮";
}

function bottomBorder() {
  return "╰" + repeat("━", 6) + "╯";
}

function addString(first, second, third) {
  return "\n" + first + "\n" + second + "\n" + third + "\n";
}

function getFaceValue(one, two, three) {
  return topBorder() + addString(one, two, three) + bottomBorder();
}

function face(faceValue) {
  switch (faceValue) {
    case 1: return getFaceValue(EMPTY, ONE_MIDDLE, EMPTY);
    case 2: return getFaceValue(ONE_LEFT, EMPTY, ONE_RIGHT);
    case 3: return getFaceValue(ONE_LEFT, ONE_MIDDLE, ONE_RIGHT);
    case 4: return getFaceValue(TWO_DOTS, EMPTY, TWO_DOTS);
    case 5: return getFaceValue(TWO_DOTS, ONE_MIDDLE, TWO_DOTS);
    case 6: return getFaceValue(TWO_DOTS, TWO_DOTS, TWO_DOTS);
  }
}

function delay() {
  for (let i = 0; i < 200000000; i++) {
  }
  console.clear();
}

function getDiceValue(num) {
  const faceValue = Math.ceil(Math.random() * 6);
  delay();
  console.log(face(faceValue));

  if (num === 0) {
    return faceValue;
  }

  return getDiceValue(num - 1);
}

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
  return "\n  --- CONGRATULATIONS! '" + name + "', YOU WON..🏆 --- \n\n";
}

function makeMassage(name, player) {
  prompt("\n" + name + " chance : press enter ");
  const rolledNumber = getDiceValue(12);
  console.log(name, "previous position :", player);

  return getCurrentPosition(player, player + rolledNumber);
}

function playGame(player1Score, player2Score, name1, name2) {
  if (player2Score === 100) {
    return getWinnerBanner(name2);
  }

  player1Score = makeMassage(name1, player1Score)
  console.log(name1, "current Positon :", player1Score);
  console.log("\n*-----------------------------------------*");

  if (player1Score === 100) {
    return getWinnerBanner(name1);
  }

  player2Score = makeMassage(name2, player2Score);
  console.log(name2 + " current position :", player2Score);
  console.log("\n*-----------------------------------------*");

  return playGame(player1Score, player2Score, name1, name2);
}

function startGame() {
  const name1 = prompt("enter player1 name :");
  const name2 = prompt("enter player2 name :");

  console.log(playGame(0, 0, name1, name2));
}

startGame();
