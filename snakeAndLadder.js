console.log("\n*------------------------------------------------ 🐍 SNAKE AND LADDER 🪜 -----------------------------------------------------*\n");

const dice1 = "╭━━━━━━╮\n┃      ┃\n┃  ⚪️  ┃\n┃      ┃\n╰━━━━━━╯\n";
const dice2 = "╭━━━━━━╮\n┃⚪️    ┃\n┃      ┃\n┃    ⚪️┃\n╰━━━━━━╯\n";
const dice3 = "╭━━━━━━╮\n┃⚪️    ┃\n┃  ⚪️  ┃\n┃    ⚪️┃\n╰━━━━━━╯\n";
const dice4 = "╭━━━━━━╮\n┃⚪️  ⚪️┃\n┃      ┃\n┃⚪️  ⚪️┃\n╰━━━━━━╯\n";
const dice5 = "╭━━━━━━╮\n┃⚪️  ⚪️┃\n┃  ⚪️  ┃\n┃⚪️  ⚪️┃\n╰━━━━━━╯\n";
const dice6 = "╭━━━━━━╮\n┃⚪️  ⚪️┃\n┃⚪️  ⚪️┃\n┃⚪️  ⚪️┃\n╰━━━━━━╯\n";

function delay() {
  for (let i = 0; i < 200000000; i++) { }
}

function blink(num) {
  if (num === 0) return;
  console.log(dice1);
  delay();
  console.clear();
  console.log(dice2);
  delay();
  console.clear();
  console.log(dice3);
  delay();
  console.clear();
  console.log(dice4);
  delay();
  console.clear();
  console.log(dice5);
  delay();
  console.clear();
  console.log(dice6);
  delay();
  console.clear();
  return blink(num - 1);
}

function dicePrint(number) {
  blink(2);
  switch (number) {
    case 1: console.log(dice1); break;
    case 2: console.log(dice2); break;
    case 3: console.log(dice3); break;
    case 4: console.log(dice4); break;
    case 5: console.log(dice5); break;
    case 6: console.log(dice6); break;
  }
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
  const rolledNumber = Math.ceil(Math.random() * 6);
  dicePrint(rolledNumber);
  console.log("☆ dice value :", rolledNumber);
  console.log(name, "preveious position :", player);
  return getCurrentPosition(player, player + rolledNumber);
}

function snakeAndLadder_2_Players(player1Score, player2Score, name1, name2) {
  if (player2Score === 100) {
    return getWinnerBanner(name2);
  }

  player1Score = makeMassage(name1, player1Score)
  console.log(name1, "current_Positon :", player1Score);
  console.log("\n*-----------------------------------------*");

  if (player1Score === 100) {
    return getWinnerBanner(name1);
  }

  player2Score = makeMassage(name2, player2Score);
  console.log(name2 + " current_position :", player2Score);
  console.log("\n*-----------------------------------------*");

  return snakeAndLadder_2_Players(player1Score, player2Score, name1, name2);
}

const name1 = prompt("enter player1 name :");
const name2 = prompt("enter player2 name :");
console.log(snakeAndLadder_2_Players(0, 0, name1, name2));
