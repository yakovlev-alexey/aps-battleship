const gameController = require("./GameController/gameController.js");
const cliColor = require("cli-color");
const beep = require("beepbeep");
const position = require("./GameController/position.js");
const letters = require("./GameController/letters.js");

const prompt = require("./utils/prompt.js");
const delim = require("./utils/delim.js");
const makeMenu = require("./utils/makeMenu.js");
const config = require("./GameController/config.js");
class Battleship {
  start() {
    console.log(cliColor.magenta("                                     |__"));
    console.log(cliColor.magenta("                                     |\\/"));
    console.log(cliColor.magenta("                                     ---"));
    console.log(cliColor.magenta("                                     / | ["));
    console.log(cliColor.magenta("                              !      | |||"));
    console.log(
      cliColor.magenta("                            _/|     _/|-++'")
    );
    console.log(
      cliColor.magenta("                        +  +--|    |--|--|_ |-")
    );
    console.log(
      cliColor.magenta("                     { /|__|  |/\\__|  |--- |||__/")
    );
    console.log(
      cliColor.magenta(
        "                    +---------------___[}-_===_.'____                 /\\"
      )
    );
    console.log(
      cliColor.magenta(
        "                ____`-' ||___-{]_| _[}-  |     |_[___\\==--            \\/   _"
      )
    );
    console.log(
      cliColor.magenta(
        " __..._____--==/___]_|__|_____________________________[___\\==--____,------' .7"
      )
    );
    console.log(
      cliColor.magenta(
        "|                        Welcome to Battleship                         BB-61/"
      )
    );
    console.log(
      cliColor.magenta(
        " \\_________________________________________________________________________|"
      )
    );
    console.log();

    this.showMenu = makeMenu({
      1: {
        title: "Make a turn",
        callback: this.makeTurn.bind(this),
      },
      2: {
        title: "Exit",
        callback: function () {
          process.exit(0);
        },
      },
    });

    this.InitializeGame();
    this.StartGame();
  }

  StartGame() {
    console.clear();
    console.log("                  __");
    console.log("                 /  \\");
    console.log("           .-.  |    |");
    console.log("   *    _.-'  \\  \\__/");
    console.log("    \\.-'       \\");
    console.log("   /          _/");
    console.log("  |      _  /");
    console.log("  |     /_\\'");
    console.log("   \\    \\_/");
    console.log('    """"');

    do {
      this.showMenu();
      // eslint-disable-next-line no-constant-condition
    } while (true);
  }

  makeTurn() {
    delim();
    console.log("< Player, it's your turn");
    var position = Battleship.ParsePosition(
      prompt("Enter coordinates for your shot :")
    );
    var isHit = gameController.CheckIsHit(this.enemyFleet, position);
    if (isHit) {
      beep();

      console.log("                \\         .  ./");
      console.log('              \\      .:";\'.:.."   /');
      console.log("                  (M^^.^~~:.'\").");
      console.log("            -   (/  .    . . \\ \\)  -");
      console.log("               ((| :. ~ ^  :. .|))");
      console.log("            -   (\\- |  \\ /  |  /)  -");
      console.log("                 -\\  \\     /  /-");
      console.log("                   \\  \\   /  /");
    }

    console.log(
      isHit ? cliColor.green("Yeah ! Nice hit !") : cliColor.red("Miss")
    );

    var computerPos = this.GetRandomPosition();
    isHit = gameController.CheckIsHit(this.myFleet, computerPos);
    console.log();
    console.log(
      `> Computer shot in ${computerPos.column}${computerPos.row} and ` +
        (isHit ? cliColor.red(`has hit your ship !`) : cliColor.yellow(`miss`))
    );
    if (isHit) {
      beep();

      console.log("                \\         .  ./");
      console.log('              \\      .:";\'.:.."   /');
      console.log("                  (M^^.^~~:.'\").");
      console.log("            -   (/  .    . . \\ \\)  -");
      console.log("               ((| :. ~ ^  :. .|))");
      console.log("            -   (\\- |  \\ /  |  /)  -");
      console.log("                 -\\  \\     /  /-");
      console.log("                   \\  \\   /  /");
    }
    delim();
  }

  static ParsePosition(input) {
    var letter = letters.get(input.toUpperCase().substring(0, 1));
    var number = parseInt(input.substring(1, 2), 10);
    return new position(letter, number);
  }

  GetRandomPosition() {
    var rows = 8;
    var lines = 8;
    var rndColumn = Math.floor(Math.random() * lines);
    var letter = letters.get(rndColumn + 1);
    var number = Math.floor(Math.random() * rows);
    var result = new position(letter, number);
    return result;
  }

  InitializeGame() {
    var seed = Math.floor(Math.random() * config.length);
    this.InitializeEnemyFleet(config[seed]);
    this.InitializeMyFleet();
  }

  InitializeMyFleet() {
    this.myFleet = gameController.InitializeShips();

    console.log(
      "Please position your fleet (Game board size is from A to H and 1 to 8) :"
    );

    this.myFleet.forEach(function (ship) {
      console.log();
      console.log(
        `Please enter the positions for the ${ship.name} (size: ${ship.size})`
      );
      for (var i = 1; i < ship.size + 1; i++) {
        const position = prompt(
          `Enter position ${i} of ${ship.size} (i.e A3):`
        );
        ship.addPosition(Battleship.ParsePosition(position));
      }
    });
  }

  InitializeEnemyFleet(config) {
    this.enemyFleet = gameController.InitializeShips();

    this.enemyFleet.forEach((ship, index) => {
      config[index].forEach((pos) => {
        ship.addPosition(new position(...pos));
      });
    });
  }
}

module.exports = Battleship;
