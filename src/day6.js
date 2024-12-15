/**
 * Day 6
 */

const input = require('fs').readFileSync('../input/day6.txt', 'utf8')
const map = input.split('\n').map(line => line.split(''));
let direction = { x: -1, y: 0 };
const directions = [
    { x: -1, y: 0 },  // up
    { x: 0, y: 1 },   // right
    { x: 1, y: 0 },    // down
    { x: 0, y: -1 }  // left
];
let stepCount = 1; // Start at 1 because we start at the first step

// Function to print map
function printMap(map) {
    console.log('-------------------');
    for (let row of map) {
        console.log(row.join(''));
    }
    console.log('-------------------');
}

// Loop over map until ^ is found
function findStart(map) {
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] === '^') return { x: row, y: col };
        }
    }
}

function changeDirection(currentDirection) {
    let currentDirectionIndex = directions.indexOf(currentDirection);
    
    direction = (currentDirectionIndex === 3) ? directions[0] : directions[currentDirectionIndex + 1];
    return direction;
}

// Function to traverse map in a given direction until next character is #
function traverseMap(map, start, direction) {
    let x = start.x;
    let y = start.y;

    while (map[x+direction.x][y+direction.y] !== '#') {    
        if (map[x][y] === '.') {
            stepCount++;
            map[x][y] = 'X';
        }

        x += direction.x;
        y += direction.y;

        if (x+direction.x < 0 || x+direction.x >= map.length || y+direction.y < 0 || y+direction.y >= map[0].length) {
            map[x][y] = 'X';
            stepCount++;
            return { x: -1, y: -1 };
        }
    }

    return { x, y };
}

function isInBounds(coords) {
    return coords.x >= 0 && coords.x < map.length && coords.y >= 0 && coords.y < map[0].length;
}

printMap(map);
let start = findStart(map);
let newCorrds = traverseMap(map, start, directions[0]);
while (isInBounds(newCorrds)) {
    start = newCorrds;
    changeDirection(direction);
    newCorrds = traverseMap(map, start, direction);
}

printMap(map);
console.log('Step count:', stepCount);