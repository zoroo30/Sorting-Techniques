let functions = require ('./functions');
let timeVector = [];
function divide(arr, start, end) {
    if (start >= end) {
        return;
    }
    let m = Math.floor(((start + end) - 1) / 2);
    divide(arr, start, m);
    divide(arr, (m + 1), end);
    merge(arr, start, m, end);
    functions.calculateTime();
}

function merge(arr, start, m, end) {
    if (start == end) {
        return;
    }

    let i = start;
    let j = m + 1;
    let part = [];
    let iterator;
    let A = 0;
    let B = 0;
    for (iterator = 0; iterator < end + start + 1; iterator++) {
        if (arr[i] < arr[j]) {
            part[iterator] = arr[i++];
        }
        else {
            part[iterator] = arr[j++];
        }
        if (i > m) {
            A = 1;
            iterator++;
            break;
        }
        if (j > end) {
            B = 1;
            iterator++;
            break;
        }
    }
    if (A == 1) {
        for (j; j <= end; j++)
            part[iterator++] = arr[j];
    }

    if (B == 1) {
        for (i; i <= m; i++)
            part[iterator++] = arr[i];
    }
    let ij;
    let k = 0;
    for (iterator = start; iterator < end + 1; iterator++) {
        arr[iterator] = part[k++];
    }
    return;
}


module.exports.merge = "merge";