# Test for Snooper
A challenge to Channel Nine which need to write and deploy a small JSON-based web service and provide us the URL to your solution.

## Problem
<p>A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.
A rover's position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.
Assume that the square directly North from (x, y) is (x, y+1).
  </p>

### Input
<p>The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation.
Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving. </p>

### Output
<p>The output for each rover should be its final co-ordinates and heading.</p>
 
<p>EXAMPLE:
  <li>Test Input:</li>
<li>5 5</li>
<li>1 2 N</li>
<li>LMLMLMLMM</li>
<li>3 3 E</li>
<li>MMRMMRMRRM</li>
<li>Expected Output:</li>
<li>1 3 N</li>
<li>5 1 E</li>
  </p>


## Getting Started
- Clone this repo to your local machine using: https://github.com/bayestorff/testSnooper

### Prerequisites & Installing
What things you need to install the software and how to install them:
<ul>
  <li>
    <a href="https://yarnpkg.com/en/">
      Yarn
    </a>
  </li>
  <li>
    <a href="https://nodejs.org/en/download/">
      NodeJS
    </a>
  </li>
  <li>
    <a href="https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71">
      Mocha Chai
    </a>  
  </li>
</ul>

## Running the tests
Once you have installed everything as explained on above included Mocha and Chai:
### run the following command in the project:
<pre>
  <code>$ yarn test</code>
 </pre>
 
 
## Authors
<ul>
  <li>
      <a href="https://github.com/bayestorff/">
      Cayo Augusto Bayestorff
    </a>      
  </li>
 </ul>

  
