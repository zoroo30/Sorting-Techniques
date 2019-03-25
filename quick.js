let timeVector = [];
let sizeVector = [];
for (n = 0; n < 25; n++) {
    let size = Math.floor(Math.random() * (100000 + 1)) + 1;
    sizeVector.push(size);
    let array = [];
    for (i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * (100 + 1));
    }
    let start = new Date().getTime();
    quickSort(array, 0, size - 1);
    let end = new Date().getTime();
    let time = end - start;
    timeVector.push(time);
    console.log(`${timeVector[n]} ${sizeVector[n]}`);
}

function quickSort(arr, start, end) {
    if (end <= start)
        return;
    let pivot = quickPass(arr, start, end);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
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