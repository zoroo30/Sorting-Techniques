class BubbleSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr, saveSwap) {
        let size = arr.length;
        for (let j = 0; j < size - 1; j++) {
            var swapped = false;
            for (let i = 0; i < size - 1 - j; i++) {
                if (arr[i] > arr[i + 1]) {
                    this.swap(arr, i, i + 1, saveSwap);
                    swapped = true;
                }
            }
            if(!swapped) return;
        }
    }
}