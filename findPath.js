function delay() {
  for (let i = 0; i < 700000000; i++) { }
}

function isAxisMatched(x_path, x_axis, y_path, y_axis) {
  return x_path === x_axis && y_path === y_axis;
}

function isPath(x, y) {
  const string = "111222233343445455";

  for (let i = 0; i < string.length; i += 2) {
    if (isAxisMatched(+string[i], x, +string[i + 1], y)) {
      return true;
    }
  }

  return false;
}

function printInstructions() {
  const instructions = "  d -->  ➡️ \n  s -->  ⬇️ \n  w -->  ⬆️ \n  a -->  ⬅️";
  console.log(instructions + "\n  e -->  exit");
}

function horizontalBoxes(i, x_pos, y_pos) {
  let box = "";

  for (let j = 1; j <= horizontal; j++) {
    if (i === x_pos && j === y_pos) {
      box += isPath(x_pos, y_pos) ? "👨‍💼" : "💣";
    }
    else if (i === vertical && j === horizontal) {
      box += "➡️ END";
    }
    else {
      box += "🟦";
    }
  }
  return box;
}

// update box ..........
function printBox(x_pos, y_pos) {
  let box = "➡️ ";

  for (let i = 1; i <= vertical; i++) {
    box += horizontalBoxes(i, x_pos, y_pos) + "\n  ";
  }

  console.log(box);
  printInstructions();
}

function getDirectionFromUser() {
  const direction = prompt("choose direction : ");

  return direction;
}

function changePosition(x, y) {
  if (!isPath(x, y)) {
    printBox(x, y)
    delay();
    console.clear();
    x = 1; y = 1;
  }

  printBox(x, y);
  const direction = getDirectionFromUser();
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
  if (vertical === x && horizontal === y) {
    console.log("\n ---- YOU REACHED THE DESTINATION ----\n");
    return;
  }

  changePosition(x, y);
}

// const vertical = +prompt("no of verticals :");
// const horizontal = +prompt("no of horizontals :");

const vertical = 5;
const horizontal = 5;

console.log("if there is a bomb. it will go intial position.\n");

startGame(1, 1);
