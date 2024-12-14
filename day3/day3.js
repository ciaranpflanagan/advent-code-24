/**
 * Day 3: Compare distance between two sorted lists
 */

const input = require('fs').readFileSync('../input/day3.txt', 'utf8')

function decode(input) {
    const regex = /mul\(\d+,\d+\)/g; // Matches mul(X,Y), where X and Y are integers
    let total = 0;

    let matches = input.match(regex);
    if (matches) {
        matches.forEach(match => {
            let nums = match.match(/\d+/g);
            
            total += parseInt(nums[0]) * parseInt(nums[1]); 
        });
    }

    return total;
}

console.log(decode(input));