/**
 * Day 7
 */

const input = require('fs').readFileSync('../input/day7.txt', 'utf8')

function generateOperators (count) {
    if (count === 0) return [[]];
    const smallerCombinations = generateOperators(count - 1);
    return smallerCombinations.flatMap(comb => [['+'].concat(comb), ['*'].concat(comb)]);
};

function calc(numbers, operators) {
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else if (operators[i] === '*') {
            result *= numbers[i + 1];
        }
    }
    return result;
};

function totalCalibration(input) {
    const lines = input.trim().split('\n');
    let total = 0;

    for (let line of lines) {
        const [target, numbersStr] = line.split(': ');
        const targetValue = parseInt(target, 10);
        const numbers = numbersStr.split(' ').map(Number);

        // Generate all operator combinations
        const operatorCombinations = generateOperators(numbers.length - 1);

        // Check if any operator combination makes the equation valid
        let isValid = false;
        for (const operators of operatorCombinations) {
            if (calc(numbers, operators) === targetValue) {
                isValid = true;
                break;
            }
        }

        // If valid, add the target value to the total sum
        if (isValid) total += targetValue;
    }

    return total;
}

console.log(totalCalibration(input));