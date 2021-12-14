const cliColor = require("cli-color");
const readline = require("readline-sync");

module.exports = function prompt(text, color = "cyan") {
  console.log(cliColor[color](text));

  return readline.question();
};
