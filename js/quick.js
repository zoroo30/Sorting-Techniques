class QuickSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr) {
        let size = arr.length;
        this.quickSort(arr, 0, size - 1);
    }

    quickSort(arr, start, end) {
        if (end <= start)
            return;
        let pivot = this.quickPass(arr, start, end);
        this.quickSort(arr, start, pivot - 1);
        this.quickSort(arr, pivot + 1, end);
    }

    quickPass(arr, start, end) {
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

    //run 1 iteration only of the algorithm
    next(arr) {
        
    }

    nextStep(arr, start, end) {
        if (end <= start)
            return;
        let pivot = this.quickPass(arr, start, end);
        this.visualizer.selectedItemIndex = i;
        this.nextStep(arr, start, pivot - 1);
        this.nextStep(arr, pivot + 1, end);
    }
}