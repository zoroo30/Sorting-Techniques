let functions = require ('./functions');
let timeVector = [];
function insertion(array, size) {
    for (j = 0; j < size; j++) {
        for (i = j + 1; i > 0; i--) {
            if (array[i] < array[i - 1]) {
                functions.swap(array, i, i - 1);
            }
        }
    }
    functions.calculateTime();
}

module.exports.insertion = "insertion";