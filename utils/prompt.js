const cliColor = require("cli-color");

module.exports = function prompt(text, color = 'cyan') {
  console.log(cliColor[color](text));
};
