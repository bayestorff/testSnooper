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
// expect(size).to.be.an.integer();
// it("is the entry an array?", function() {
//   expect(arrayRovers).to.be.an("array");
// });
// it("are there 2 rovers?", function() {
//   expect(arrayRovers).to.have.lengthOf(3);
// });
// it("Are the rovers starting in the same spot?", function() {
//   expect(arrayRovers[0].initialPosition).to.not.equal(
//     arrayRovers[1].initialPosition
//   );
// });
// it("Will the rovers collid?", function() {
//   if (arrayRovers[0].initialPosition !== arrayRovers[1].initialPosition) {
//     expect(arrayRovers[0].command).to.not.equal(arrayRovers[1].command);
//   }
// });

/* checking the output */
const output = main(size, arrayRovers);
console.log(output);

it("Expect response has rover as final position", function() {
  const response = main(size, arrayRovers);
  expect(response[0]).to.have.all.keys("rover", "position");
});
