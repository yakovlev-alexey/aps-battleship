const prompt = require("./prompt.js");

/**
 * @param {Object} options
 * @returns
 */
module.exports = function makeMenu(options) {
  const keys = Object.keys(options);
  return function showMenu() {
    keys.forEach((key) => {
      console.log(key + " - " + options[key].title);
    });

    let option = null;

    do {
      option = prompt("Enter your choice:");
    } while (!keys.includes(option));

    options[option].callback();
  };
};
