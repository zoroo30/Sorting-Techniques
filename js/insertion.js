class InsertionSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr) {
        let size = arr.length;
        for (let j = 0; j < size; j++) {
            for (let i = j + 1; i > 0; i--) {
                if (arr[i] < arr[i - 1]) {
                    swap(arr, i, i - 1);
                }
            }
        }
    }

    //run 1 iteration only of the algorithm
    next(arr) {
        if(this.counter < arr.length)
            this.nextStep(arr, this.counter);
        this.counter++;
    }

    nextStep(arr, j) {
        for (let i = j + 1; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1);
                this.visualizer.selectedItemIndex = i;
            }
        }
    }
}