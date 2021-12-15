const assert = require("assert").strict;
const Battleship = require("../battleship.js");
const letters = require("../GameController/letters.js");
const position = require("../GameController/position.js");
const Ship = require("../GameController/ship.js");

var config = [
  [
    [letters.B, 4],
    [letters.B, 5],
    [letters.B, 6],
    [letters.B, 7],
    [letters.B, 8],
  ],
  [
    [letters.E, 5],
    [letters.E, 6],
    [letters.E, 7],
    [letters.E, 8],
  ],
  [
    [letters.A, 3],
    [letters.B, 3],
    [letters.C, 3],
  ],
  [
    [letters.F, 8],
    [letters.G, 8],
    [letters.H, 8],
  ],
  [
    [letters.C, 5],
    [letters.C, 6],
  ],
];

function createShip(options) {
  var positions = options.map((option) => new position(...option));

  return new Ship("", options.length, undefined, positions);
}

var expectedShips = config.map(createShip);

describe("initializeEnemyFleet", function () {
  it("should map config positions to fleet", function () {
    var bs = new Battleship();
    bs.InitializeEnemyFleet(config);

    bs.enemyFleet.forEach((ship, index) => {
      assert.deepStrictEqual(ship.positions, expectedShips[index].positions);
    });
  });
});
