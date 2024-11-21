/* ---------- TODO ------------
    * generate box.
    * implement , insert man in a box, moving position in the box..
*/
function delay() {
  for (let i = 0; i < 700000000; i++) { }
}

function isPath(x, y) {
  const string = "111222233343445455";
  for (let i = 0; i < string.length; i += 2) {
    if (+string[i] === x && +string[i + 1] === y) {
      return true;
    }
  }

  return false;
}

function instructions() {
  const message = "  d -->  ➡️ \n  s -->  ⬇️ \n  w -->  ⬆️ \n  a -->  ⬅️";
  console.log(message);
}

function horizontalBox(i, x_pos, y_pos) {
  let box = "";

  for (let j = 1; j <= horizontal; j++) {
    if (i === x_pos && j === y_pos) {
      box += isPath(x_pos, y_pos) ? "👨‍💼" : "💣";
    }
    else if (i === vertical && j === horizontal) {
      box += "➡️ ";
    } else {
      box += "🟦";
    }
  }
  return box;
}

// update box ..........
function updateBox(x_pos, y_pos) {
  let box = "➡️ ";

  for (let i = 1; i <= vertical; i++) {
    box += horizontalBox(i, x_pos, y_pos);
    box += "\n  ";
  }

  console.log(box);
  instructions();
}

function userInput() {
  const input = prompt("choose direction : ");
  return input;
}

function validation(x, y) {
  const isValid = confirm("do you want to exit:");
  if (!isValid) {
    if (x < 1 || y < 1) { x < 1 ? x += 1 : y += 1; }
    if (vertical <= x || horizontal <= y) { x < 1 ? x -= 1 : y -= 1; }
  } else {
    return false;
  }

  start(x, y);
}

function changePos(x, y) {
  if (!isPath(x, y)) {
    updateBox(x, y)
    delay();
    console.clear();
    x = 1; y = 1;
  }

  updateBox(x, y);
  const input = userInput();
  console.clear();
  if (input === "d") {
    y += 1;
  } else if (input === "s") {
    x += 1;
  } else if (input === "w") {
    x -= 1; // up
  } else if (input === "a") {
    y -= 1; // back
  }

  start(x, y);
}

function start(x, y) {
  if (vertical === x && horizontal === y) {
    console.log("\n ---- YOU REACHED DESTINATION ----\n")
    return;
  }

  if (x > vertical || y > horizontal || x < 1 || y < 1) {
    if (!validation(x, y)) { return; };
  }

  changePos(x, y);
}

const vertical = +prompt("no of verticals :");
const horizontal = +prompt("no of horizontals :");
console.log("if there is a bomb. it will go intial position.\n")
start(1, 1);
