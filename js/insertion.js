class InsertionSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr, saveSwap) {
        let size = arr.length;
        for (let j = 0; j < size; j++) {
            for (let i = j + 1; i > 0; i--) {
                if (arr[i] < arr[i - 1]) {
                    this.swap(arr, i, i - 1, saveSwap);
                }
            }
        }
    }
}