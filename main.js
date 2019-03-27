let bubble = require ('./bubble');
let insertion = require ('./insertion');
let selection = require ('./selection');
let merge = require ('./merge');
let quick = require ('./quick');
let heap = require ('./heap');
let sizeVector = [];
for (n = 0; n < 25; n++) {
    let size = Math.floor(Math.random() * (10000 + 1)) + 1;
    sizeVector.push(size);
    let array = [];
    for (i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * (100 + 1));
    }
    //bubble.bubbleSort(array,size);
    //insertion.insertion(array,size);
    //selection.selection(array,size);
    //merge.divide(array,0,size-1);
    //quick.quickSort(array,0,size-1);
    //heap.heapSort(array,size);
    //console.log(`${timeVector[n]} ${sizeVector[n]}`);
}