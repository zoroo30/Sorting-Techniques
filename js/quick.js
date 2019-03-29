class QuickSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr, saveSwap) {
        let size = arr.length;
        this.quickSort(arr, 0, size - 1, saveSwap);
    }

    quickSort(arr, start, end, saveSwap) {
        if (end <= start)
            return;
        let pivot = this.quickPass(arr, start, end, saveSwap);
        this.quickSort(arr, start, pivot - 1, saveSwap);
        this.quickSort(arr, pivot + 1, end, saveSwap);
    }

    quickPass(arr, start, end, saveSwap) {
        let pivot = Math.floor(Math.random() * (end - start + 1)) + start;
        let i = start - 1;
        let j = start;
        this.swap(arr, pivot, end, saveSwap);
        for (j; j < end; j++) {
            if (arr[end] >= arr[j]) {
                i++;
                this.swap(arr, i, j, saveSwap);
            }
        }
        this.swap(arr, end, i + 1, saveSwap);
        return i + 1;
    }
}