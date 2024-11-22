function isNumberRepeated(string, number) {
  for (let i = 0; i < string.length; i++) {
    if (+string[i] === number) {
      return true;
    }
  }

  return false;
}

function randomInt() {
  return Math.floor(Math.random() * 10);
}

function generateCode(string, columnsCount) {
  if (columnsCount === 0) {
    return string;
  }
  const randomNumber = randomInt();

  if (!isNumberRepeated(string, randomNumber)) {
    string += randomNumber + " ";
    return generateCode(string, columnsCount - 1);
  }

  return generateCode(string, columnsCount);
}

function readUserInput() {
  return prompt("-->");
}


function getFeedBack(target, index, userInput) {
  for (let i = userInput.length - 1; i >= 0; i -= 2) {
    if (userInput[i] === target) {
      return i === index ? "🟢" : "⚪️";
    }
  }

  return "";
}

function generateFeedBack(userInput) {
  let feedBack = "";

  for (let i = 0; i < GENERATED_CODE.length - 1; i += 2) {
    feedBack += getFeedBack(GENERATED_CODE[i], i, userInput);
  }

  return feedBack;
}

function printFeedBack(take, num) {
  console.log("    " + take + "\t\t" + "Chances left : " + (num - 1) + "\n");
}

function countGreens(string) {
  let noOfGreens = 0;

  for (let i = 0; i < string.length; i += 2) {
    if (string[i] + string[i + 1] === '🟢') {
      noOfGreens += 1;
    }
  }

  return noOfGreens;
}

function isValidInput(userInput) {
  return userInput.length === (COLUMNS * 2) - 1;
}

function printInvalid() {
  console.log("    you entered invalid input. \n");
}

function playGame(chances) {
  if (chances === 0) {
    console.log("  answer :", GENERATED_CODE, "\n");
    return 0;
  }

  const userInput = readUserInput();

  if (!isValidInput(userInput)) {
    printInvalid();
    return playGame(chances);
  }

  const feedback = generateFeedBack(userInput);
  printFeedBack(feedback, chances);

  if (countGreens(feedback) === COLUMNS) {
    return 1;
  }

  return playGame(chances - 1);
}

function frameWork() {
  console.log("\n*----------------------------------------------- 👨‍🏫 🧠 ----------------------------------------------------*");
  console.log("\n*---------------------------------* 𝓜 𝓐 𝓢 𝓣 𝓔 𝓡   𝓜  𝓘 𝓝 𝓓 *-----------------------------------------------*\n");

  const message = "  This symbol indicates,there is correct number";

  console.log("*- Enter numbers with spaces , if colums are 5, type like bleow example -*");
  console.log('   Example : \n\t --> "1 2 3 4 5"\n');
  console.log(message, "& correct position.", "    --> 🟢");
  console.log(message, "but,incorrect position.", "--> ⚪️", "\n");
}

function lineSpace() {
  console.log("\n");
}

frameWork();

const COLUMNS = +prompt("enter number of digits:");
const NO_OF_CHANCES = +prompt("number of chances do you want :");
lineSpace();
const GENERATED_CODE = generateCode("", COLUMNS);
const banner = playGame(NO_OF_CHANCES) === 1 ? 'WON 🏆 🥳' : "LOOSE 🙁";

console.log("*------ YOU", banner, "------*");
