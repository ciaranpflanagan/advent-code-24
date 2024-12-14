/**
 * Day 2: Compare each line (report), must be in increasing or decreasing order & must differ in order by >1 <= 3
 */

const input = require('fs').readFileSync('../input/day2.txt', 'utf8')

function getReportSafety(report) {
    if (report.length === 1) return true;

    let order = '';
    for (let i = 0; i < report.length; i++) {
        if (i == 0) {
            order = (report[i] < report[i + 1]) ? 'increasing' : 'decreasing';
        }

        // Fails increasing or decreasing order condition
        if (report[i] < report[i + 1] && order === 'decreasing') return false;
        if (report[i] > report[i + 1] && order === 'increasing') return false;

        // Fails difference condition
        if (Math.abs(report[i] - report[i + 1]) > 3 || Math.abs(report[i] - report[i + 1]) < 1) return false;
    }

    return true;
}

function computeReports(input) {
    let reports = input.split('\n').map(line => line.split(' ').map(num => parseInt(num)));

    let safeReports = 0;
    for (let i = 0; i < reports.length; i++) {
        if (getReportSafety(reports[i])) {
            safeReports++;
            console.log('Report ' + (i + 1) + ': true');
        } else {
            console.log('Report ' + (i + 1) + ': false');
        }
    }

    return safeReports;
}

console.log('Safe Reports: ' + computeReports(input));