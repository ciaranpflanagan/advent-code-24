/**
 * Day 1: Compare distance between two sorted lists
 */

const input = require('fs').readFileSync('../input/day1.txt', 'utf8')

function getColumns (input) {
    let col1 = []
    let col2 = [];
    
    input.split('\n').map(line => {
        let row =  line.split(' ');
        col1.push(parseInt(row[0]));
        col2.push(parseInt(row[row.length - 1]));
    });

    return [col1, col2];
}

function compareDistance(input) {
    let cols = getColumns(input);
    let col1 = cols[0].sort((a, b) => a - b);
    let col2 = cols[1].sort((a, b) => a - b);

    console.log(col1, col2);

    let distance = 0;

    // Assumes both columns are the same length
    for (let i = 0; i < col1.length; i++) {
        distance += Math.abs(col1[i] - col2[i]);
    }

    return distance;
}

// Get similarity score by traversing through the col1 and finding number of times it appears in col2
function similarityScore(input) {
    let cols = getColumns(input);
    let col1 = cols[0];
    let col2 = cols[1];

    let score = 0;

    for (let i = 0; i < col1.length; i++) {
        if (col2.includes(col1[i])) {
            // find number of appearances
            count = col2.filter(num => num === col1[i]).length;
            score += col1[i] * count;
        }
    }

    return score;
}

console.log('Distance: ' + compareDistance(input));
console.log('Similarity Score: ' + similarityScore(input));