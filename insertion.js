let timeVector = [];
let sizeVector = [];
for (n = 0; n < 25; n++) {
    let size = Math.floor(Math.random() * (10000 + 1)) + 1;
    sizeVector.push(size);
    let array = [];
    for (i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * (100 + 1));
    }
    let start = new Date().getTime();
    insertion(array, size);
    let end = new Date().getTime();
    let time = end - start;
    timeVector.push(time);
}

for (n = 0; n < 25; n++) {
    console.log(`${timeVector[n]} ${sizeVector[n]}`);
}

function insertion(array, size) {
    for (j = 0; j < size; j++) {
        for (i = j + 1; i > 0; i--) {
            if (array[i] < array[i - 1]) {
                swap(array, i, i - 1);
            }
        }
    }
}
function swap(arr, p1, p2) {
    temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
}