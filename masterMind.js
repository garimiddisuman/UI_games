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
  for (let i = userInput.length - 1; i >= 0; i -= 2) {
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

/* ----------------------------- Main function ------------------------------ */
function start(num) {
  if (num === 0) {
    return 0;
  }

  const userInput = takeUserInput();

  if (userInput.length !== 9) {
    console.log("    you entered invalid input. \n");
    return start(num);
  }

  const take = takeCharFromCode(userInput);
  console.log("    " + take + "\t\t" + "Chances left : " + (num - 1) + "\n");

  if (take === "🟢🟢🟢🟢🟢") {
    return 1;
  }

  return start(num - 1);
}

/*--------------------------------- FRAME WORK -------------------------------*/
console.log("\n*------------------------------------------------------- 👨‍🏫 🧠 ------------------------------------------------------------*");
console.log("\n*-----------------------------------------* 𝓜 𝓐 𝓢 𝓣 𝓔 𝓡   𝓜  𝓘 𝓝 𝓓 *---------------------------------------------------------*\n");

const message = "  This symbol indicates,there is correct number";
console.log(" *- Enter 5 numbers with spaces -*");
console.log('    Example : \n\t --> "1 2 3 4 5"\n');
console.log(message, "& correct position.", "    --> 🟢");
console.log(message, "but,incorrect position.", "--> ⚪️", "\n");
const noOfChances = +prompt("number of chances do you want :");
console.log("\n");
/*----------------------------------------------------------------------------*/

const generatedCode = generateCode("", 5); // <---  no of digits.
const isLoose = start(noOfChances);
const banner = isLoose === 1 ? 'WON 🏆 🥳' : "LOOSE 🙁";

if (isLoose === 0) {
  console.log("answer :", generatedCode, "\n");
}

console.log("*------ YOU", banner, "------*");
