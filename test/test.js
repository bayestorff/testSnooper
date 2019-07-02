const main = require("../index.js");
let expect = require("chai").expect;

const size = 5;

const arrayRovers = [
  {
    name: "rover1",
    initialPosition: "1 2 N",
    command: "LMLMLMLMM"
  },
  {
    name: "rover2",
    initialPosition: "3 3 E",
    command: "MMRMMRMRRM"
  }
];

expect(size).to.equal(5);
expect(arrayRovers).to.be.an("array");
expect(arrayRovers).to.have.lengthOf(2);
expect(arrayRovers[0].initialPosition).to.not.equal(
  arrayRovers[1].initialPosition
);
if (arrayRovers[0].initialPosition !== arrayRovers[1].initialPosition) {
  expect(arrayRovers[0].command).to.not.equal(arrayRovers[1].command);
}

/* checking the output */
const output = main(size, arrayRovers);
console.log(output);
