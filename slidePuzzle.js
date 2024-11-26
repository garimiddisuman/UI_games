function repeat(char, times) {
  let string = "";

  for (let i = 0; i < times; i++) {
    string += char;
  }

  return string;
}

function topBorder() {
  return "╭" + repeat("━", 11) + "╮";
}

function middleBorder() {
  return repeat("━", 11) + "┃\n";
}

function createBox(string) {
  let updatedString = "";

  for (let i = 0; i < string.length; i++) {
    updatedString += " ┃ " + string[i];
    if (i % 3 === 2) {
      updatedString += " ┃\n ┃" + middleBorder();
    }
  }

  return " " + topBorder() + "\n" + updatedString;
}

function slice(string, from, to) {
  let slicedString = "";

  for (let i = from; i <= to; i++) {
    slicedString += string[i];
  }

  return slicedString;
}

function findIndex(string, char) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] === char) {
      return index;
    }
  }

  return -1;
}

function swapChars(string, charPos1, charPos2) {
  let swappedString = "";
  const char1 = string[charPos1];
  const char2 = string[charPos2];

  for (let i = 0; i < string.length; i++) {
    if (i === charPos1) {
      swappedString += char2;
      continue;
    }
    if (i === charPos2) {
      swappedString += char1;
      continue;
    }
    swappedString += string[i];
  }

  return swappedString;
}

function getCharPos(spacePosition, input) {
  if (input === "d" && spacePosition % 3 !== 2) {
    return spacePosition + 1;
  }
  if (input === "a" && spacePosition % 3 !== 0) {
    return spacePosition - 1;
  }
  if (input === "s" && spacePosition < 6) {
    return spacePosition + 3;
  }
  if (input === "w" && spacePosition > 2) {
    return spacePosition - 3;
  }
  return spacePosition;
}

function getModifiedString(string, input) {
  const spacePosition = findIndex(string, " ");
  let charPos = getCharPos(spacePosition, input);
  return swapChars(string, spacePosition, charPos);
}

function wait() {
  for (let i = 0; i < 100000000; i++) {
  }
}

function displayInstructions() {
  const instructions = "  d -->  ➡️ \n  s -->  ⬇️ \n  w -->  ⬆️ \n  a -->  ⬅️";
  console.log(instructions + "\n  e -->  exit\n");
}

function isExit(char) {
  return char === "e";
}

function playGame(string) {
  if (string === "abcdefgh ") {
    return 1;
  }

  console.log(createBox(string));
  displayInstructions();
  const readplayerInput = prompt("Enter direction :");

  if (isExit(readplayerInput)) {
    return 0;
  }

  wait();
  console.clear();
  string = getModifiedString(string, readplayerInput);
  return playGame(string);
}

function start() {
  if (playGame(" abcdefgh") === 1) {
    console.log(" you solved the puzzle...");
  }
}

start();
