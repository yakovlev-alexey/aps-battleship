const assert = require("assert").strict;
const makeMenu = require("../utils/makeMenu.js");
const sinon = require("sinon");
const readline = require("readline-sync");

describe("makeMenu", function () {
  it("should return a valid position for valid input", function () {
    sinon.stub(readline, "question").returns("1");
    var spy = sinon.spy();
    var options = {
      1: { title: "smth", callback: spy },
    };
    makeMenu(options)();
    assert(spy.called);
  });
});
