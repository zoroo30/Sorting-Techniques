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
    let sorted = [];
    heapSort(array, size, sorted);
    let end = new Date().getTime();
    let time = end - start;
    timeVector.push(time);
    console.log(`${timeVector[n]} ${sizeVector[n]}`);
}



function maxHeapify(node, array, size) {
    if ((node * 2) > size)
        return;
    let child1, child2;
    if ((node * 2 + 1) > size - 1) {
        child1 = 0;
    }
    else {

        child1 = array[node * 2 + 1];
    }
    if ((node * 2 + 2) > size - 1) {
        child2 = 0;
    }
    else {

        child2 = array[node * 2 + 2];
    }
    let bigger = child2;
    let index = node * 2 + 2;
    if (child1 > bigger) {
        bigger = child1;
        index = node * 2 + 1;
    }
    if (bigger > array[node]) {
        swap(array, node, index);
    }
    else
        return;
    maxHeapify(index, array, size);

}

function buildMaxHeap(array, size) {
    let i;
    for (i = (size - 2) / 2; i > -1; i--) {
        maxHeapify(Math.floor(i), array, size);
    }
}

function heapSort(array, size, sorted) {
    let i = 0;
    for (i; i < size; i++) {
        buildMaxHeap(array, size);
        sorted[i] = array[0];
        array[0] = 0;
    }
    let stop = Math.floor(size / 2);
    for (i = 0, j = size - 1; i < stop; i++ , j--) {
        swap(sorted, i, j);
    }
}
function swap(arr, p1, p2) {
    temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
}

