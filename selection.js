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
    selection(array, size);
    let end = new Date().getTime();
    let time = end - start;
    timeVector.push(time);
}

for (n = 0; n < 25; n++) {
    console.log(`${timeVector[n]} ${sizeVector[n]}`);
}


function selection(array, size) {

    for (j = 0; j < size; j++) {
        let index = findMin(array, j, size);
        swap(array, index, j);
    }

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

function swap(arr, p1, p2) {
    temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
}