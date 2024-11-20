// To remove duplicate number in generated code......
function isValid(string, code) {
  for (let i = 0; i < string.length; i++) {
    if (+string[i] === code) {
      return false;
    }
  }
  return true;
}

// To generate code ........
function generateCode(string, noOfCodes) {
  if (noOfCodes === 0) {
    return string;
  }
  const code = Math.floor(Math.random() * 10);

  if (isValid(string, +code)) {
    string += code + " ";
    return generateCode(string, noOfCodes - 1);
  }
  return generateCode(string, noOfCodes);
}

// To access input from user ....
function takeUserInput() {
  return prompt("-->");
}

// To give feedback based on the user input......
function getFeedBack(target, index, userInput) {
  for (let i = 0; i < userInput.length; i += 2) {
    if (userInput[i] === target) {
      return i === index ? "🟢" : "⚪️";
    }
  }

  return "";
}

// To check each number in generated code with each number in user input...
function takeCharFromCode(userInput) {
  let feedBack = "";

  for (let i = 0; i < generatedCode.length - 1; i += 2) {
    feedBack += getFeedBack(generatedCode[i], i, userInput);
  }

  return feedBack;
}

/* -------------------- Main function ----------------- */
function start(num) {
  if (num === 0) {
    return 0;
  }
  const userInput = takeUserInput();
  const take = takeCharFromCode(userInput);
  console.log("    " + take + "\n");

  if (take === "🟢🟢🟢🟢🟢") {
    return 1;
  }

  return start(num - 1);
}

/* ------------- starts from here ------------------- */

// no of digits do you want...(if I change this change line no : 61 "🟢")
const noOfCodes = 5;           // noOfCodes === 🟢 * noOfCodes...
const generatedCode = generateCode("", noOfCodes);
console.log(" \n------ limit is " + noOfCodes + " numbers at a time -------");
console.log("    *------ total chances is 10 -------*\n");

// no of chaces do you want to find ....
const noOfChances = 15;

const banner = start(noOfChances) === 1 ? 'WON 🏆 🥳' : "LOOSE 🙁";
console.log("*------ YOU", banner, "------*");
