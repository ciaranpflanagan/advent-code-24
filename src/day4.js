/**
 * Day 4
 */

const input = require('fs').readFileSync('../input/day4.txt', 'utf8')
const table = input.split('\n');

const directions = [
    { x: 0, y: 1 },   // right
    { x: 0, y: -1 },  // left
    { x: -1, y: 0 },  // up
    { x: 1, y: 0 },   // down
    { x: 1, y: 1 },   // down-right
    { x: 1, y: -1 },  // down-left
    { x: -1, y: 1 },  // up-right
    { x: -1, y: -1 }  // up-left
];
const word = 'XMAS';

function findWord(x, y, direction) {
    for (let i = 0; i < word.length; i++) {
        const newX = x + i * direction.x;
        const newY = y + i * direction.y;

        // Out of bounds
        if (newX < 0 || newX >= table.length
        || newY < 0 || newY >= table[0].length) return false;
        
        // Word not found
        if (table[newX][newY] !== word[i]) return false;
    }

    return true;
}

function traverseTable() {
    let count = 0;

    for (let row = 0; row < table.length; row++) {
        for (let col = 0; col < table[row].length; col++) {
            for (const direction of directions) {
                if (findWord(row, col, direction)) {
                    count++;
                }
            }
        }
    }

    return count;
}

console.log(traverseTable());