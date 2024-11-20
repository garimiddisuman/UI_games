function printData(noOfGames, wons, looses) {
  console.log("\n*--- SCORE BOARD ---*");
  console.log("| games played :", noOfGames, " |");
  console.log("|-------------------|");
  console.log("| games Won    :", wons, " |");
  console.log("|-------------------|");
  console.log("| games loose  :", looses, " |");
  console.log("*-------------------*");
}

function repeat(wons, looses) {
  const doYouWantAgain = confirm("Do you Want play again:");

  if (doYouWantAgain) {
    return guessNumber(Math.floor(Math.random() * 10), 1, 3, wons, looses);
  }

  printData(wons + looses, wons, looses);

  return '\n  "Thank you for playing...🤗"\n';
}

function addQuotes(string) {
  return '\n  Hint :- "' + string + '"';
}

function comment(secretNumber, userGuess, guessCount) {
  let feedBack = Math.abs(secretNumber - userGuess);

  if (feedBack < 2) {
    feedBack = "Above number is closer to secret number.";
  } else {
    feedBack = "Above number is far away to secret number.";
  }

  switch (guessCount) {
    case 1:
      return addQuotes(feedBack + " try once again.");
    case 2:
      return addQuotes(feedBack + " you have last chance.🥵");
    default:
      console.log("\n   * secret number was '" + secretNumber + "'.");
      return '\n--- BETTER LUCK NEXT TIME.😉 --- \n';
  }
}

function guessNumber(secretNumber, guessCount, guessLimit, wons, looses) {
  const guess = + prompt("\n --> Guess Secret Number :");

  if (guess === secretNumber) {
    console.log('\n--- YOU WON...! 🏆 ---\n');
    return repeat(wons + 1, looses);
  }

  console.log(comment(secretNumber, guess, guessCount));

  if (guessCount === guessLimit) {
    return repeat(wons, looses + 1);
  }

  return guessNumber(secretNumber, guessCount + 1, guessLimit, wons, looses);
}

console.log("\n---- guess number from 0 to 9 in 3 chances -----");
console.log(guessNumber(Math.floor(Math.random() * 10), 1, 3, 0, 0));
