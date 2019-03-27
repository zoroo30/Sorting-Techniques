let functions = require ('./functions');
let timeVector = [];
function quickSort(arr, start, end) {
    if (end <= start)
        return;
    let pivot = quickPass(arr, start, end);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
    functions.calculateTime();
}

function quickPass(arr, start, end) {
    let pivot = Math.floor(Math.random() * (end - start + 1)) + start;
    let i = start - 1;
    let j = start;
    swap(arr, pivot, end);
    for (j; j < end; j++) {
        if (arr[end] >= arr[j]) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, end, i + 1);
    return i + 1;
}

function swap(arr, p1, p2) {
    temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
}


module.exports.quick = "quick";