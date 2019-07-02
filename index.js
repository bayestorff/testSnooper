const moveObject = {
  S: [0, -1],
  W: [-1, 0],
  N: [0, 1],
  E: [1, 0]
};

const turnLeft = {
  N: "W",
  W: "S",
  S: "E",
  E: "N"
};

const turnRight = {
  N: "E",
  E: "S",
  S: "W",
  W: "N"
};

moveRoverForward = ({ facing, newPosition, size }) => {
  const moveVector = moveObject[facing];
  const pos = newPosition.split("-").map(Number);
  const x = pos[0] + moveVector[0];
  const y = pos[1] + moveVector[1];
  if (x < 0 || x > size || y < 0 || y >= size) {
    return { error: true };
  }
  return x + "-" + y;
};

turnRoverLeft = facing => {
  return turnLeft[facing];
};

turnRoverRight = facing => {
  return turnRight[facing];
};

const main = (size, rovers) => {
  let arrayReturn = [];

  for (let i = 0; i < rovers.length; i++) {
    if (!rovers[i].hasOwnProperty("name"))
      return `The rover ${i} doesn't have a name.`;
    if (!rovers[i].hasOwnProperty("initialPosition"))
      return `The rover ${i} doesn't have an initial position.`;
    if (!rovers[i].hasOwnProperty("command"))
      return `The rover ${i} doesn't have instructions.`;

    let parts = rovers[i].initialPosition.split(" ");
    let position = parts[0] + "-" + parts[1];
    let facing = parts[2];
    const commands = rovers[i].command.split("");
    let newPosition = position;

    for (let j = 0; j < commands.length; j++) {
      if (commands[j] === "L") {
        facing = turnRoverLeft(facing);
      }
      if (commands[j] === "R") {
        facing = turnRoverRight(facing);
      }
      if (commands[j] === "M") {
        newPosition = moveRoverForward({ facing, newPosition, size });
      }
      if (newPosition.error) {
        console.log("Can not move beyond the boundaries of Mars");
      }
    }
    arrayReturn.push(`rover${i + 1}: ` + newPosition + facing);
  }

  return arrayReturn;
};

module.exports = main;
