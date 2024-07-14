// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system.

const input = require("readline-sync");

const oldPointStructure = {
   1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
   2: ["D", "G"],
   3: ["B", "C", "M", "P"],
   4: ["F", "H", "V", "W", "Y"],
   5: ["K"],
   8: ["J", "X"],
   10: ["Q", "Z"],
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {
      for (const pointValue in oldPointStructure) {
         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
         }
      }
   }
   console.log(letterPoints);
   return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
   console.log("");
   // oldScrabbleScorer(input.question("Enter a word to score: "));
  let promptInput = input.question("Enter a word to score: ");
  return promptInput;
}

let newPointStructure;

let simpleScorer = function (word) {
      word = word.toUpperCase();
      return word.length;
   };

let vowelBonusScorer = function (word) {
      word = word.toUpperCase();
      const vowelArray = ["A", "E", "I", "O", "U"];
      let vowelPoint = 0;
      let consonantPoint = 0;
      let totalPoint = 0;

      for (let letter of word) {
         if (vowelArray.includes(letter)) {
            vowelPoint += 3;
         } else {
            consonantPoint += 1;
         }
         // console.log("vowel", vowelPoint);
         // console.log("consonant", consonantPoint);
      }
      totalPoint = vowelPoint + consonantPoint;
      return totalPoint;
   }

let scrabbleScorer;

let userChoice = ""

const scoringAlgorithms = [
   {
     name: "Simple Scorer",
     description: "Each letter is worth 1 point.",
     scorerFunction: simpleScorer
   },
   {
     name: "Vowel Bonus Scorer",
     description: "Vowels are worth 3 points, and consonants are worth 1 point.",
     scorerFunction: vowelBonusScorer
   },
   {
     name: "Scrabble Scorer",
     description: "Uses the standard Scrabble letter values.",
     scorerFunction: scrabbleScorer
   }
 ];

function scorerPrompt(userword) { 
   console.log("Which scoring algorithm would you like to use?");
   console.log("");
   console.log("0 - Simple: One point per character");
   console.log("1 - Vowel Bonus: Vowels are worth 3 points");
   console.log("2 - Scrabble: Uses scrabble point system");
   userChoice = input.question("Enter 0, 1, or 2: ");
   let selectedScoringAlgorithm = scoringAlgorithms[1];
   console.log("Score for " + "'" + userword + "'" + ": " + selectedScoringAlgorithm.scorerFunction(userword) );
   return selectedScoringAlgorithm;
}

function transform() { }

function runProgram() { 
   let userWord = initialPrompt();
   scorerPrompt(userWord);
      // Simple scoring
      // console.log("algorithm name: ", scoringAlgorithms[0].name);
      // console.log("scorerFunction result: ", scoringAlgorithms[0].scorerFunction("JavaScript"));
   //console.log(vowelBonusScorer.scoreFunction("helloworld"));
   //console.log(vowelBonusScorer(input.question("Enter a word to score: ")));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt,
};
