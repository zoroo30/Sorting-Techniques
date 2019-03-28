let sortingAlgorithms = {
    "bubble sort": new BubbleSort(),
    "insertion sort": new InsertionSort(),
    "selection sort": new SelectionSort(),
    "merge sort": new MergeSort(),
    "quick sort": new QuickSort(),
    "heap sort": new HeapSort()
};

for(let x = 0; x <= 10000; x += 1000) {
    var arr = getRandomInputArray(x);
    for (var key in sortingAlgorithms) {
        sortingAlgorithms[key].sort(arr);
    }
}

var data = [];

for (var key in sortingAlgorithms) {
    data.push({
      x: sortingAlgorithms[key].sizeVector,
      y: sortingAlgorithms[key].timeVector,
      mode: 'lines+markers',
      type: 'scatter',
      name: key
    });
}

Plotly.newPlot('myDiv', data);