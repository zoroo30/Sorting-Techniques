let functions = require('./functions');
let timeVector = [];
function bubbleSort(array, size) {
    for (j = 0; j < size - 1; j++) {
        for (i = 0; i < size - 1 - j; i++) {
            if (array[i] > array[i + 1]) {
                functions.swap(array, i, i + 1);
            }
        }
    }
    functions.calculateTime();
}
module.exports.bubble = "bubble";