const cliColor = require("cli-color");

module.exports = function showError(
  message = "Invalid input, please try again\n"
) {
  console.log(cliColor.red(message));

  return true;
};
