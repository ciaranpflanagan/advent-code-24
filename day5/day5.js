/**
 * Day 5
 */

const input = require('fs').readFileSync('../input/day5.txt', 'utf8')
const rules = input.split('\n');
let printOrder = [];
let ans = 0;

for (let i = 0; i < rules.length; i++) {
    if (rules[i].trim() === '') {
        printOrder = rules.splice(i + 1);
        rules.pop();
        break;
    }
}

function updateFollowsRules(update) {
    let updateArr = update.split(',');

    for (let i = 0; i < rules.length; i++) {
        let rule = rules[i].split('|');
        let a = rule[0];
        let b = rule[1];
        
        let aIndex = updateArr.indexOf(a);
        let bIndex = updateArr.indexOf(b);

        if (aIndex === -1 || bIndex === -1) continue;
        if (aIndex > bIndex) return false;
    }
    ans += parseInt(updateArr[Math.floor(updateArr.length / 2)]);

    return true;
}

for (let orders of printOrder) {
    updateFollowsRules(orders)
}

console.log(ans);