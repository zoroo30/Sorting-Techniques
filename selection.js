let functions = require ('./functions');
let timeVector = [];
function selection(array, size) {

    for (j = 0; j < size; j++) {
        let index = findMin(array, j, size);
        swap(array, index, j);
    }
    functions.calculateTime();
}
function findMin(arr, p1, p2) {
    min = arr[p1];
    index = p1++;
    for (p1; p1 < p2; p1++) {
        if (arr[p1] < min) {
            min = arr[p1];
            index = p1;
        }
    }
    return index;
}

module.exports.selection = "selection";