function calculateTime() {
    let start = new Date().getTime();
    selection(array, size);
    let end = new Date().getTime();
    let time = end - start;
    timeVector.push(time);
}

function swap(arr, p1, p2) {
    temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
}

module.exports.funtions = "functions";