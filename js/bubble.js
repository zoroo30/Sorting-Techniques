class BubbleSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr) {
        let size = arr.length;
        for (let j = 0; j < size - 1; j++) {
            for (let i = 0; i < size - 1 - j; i++) {
                if (arr[i] > arr[i + 1]) {
                    swap(arr, i, i + 1);
                }
            }
        }
    }

    //run 1 iteration only of the algorithm
    next() {

    }
}