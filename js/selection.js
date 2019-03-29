class SelectionSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr) {
        let size = arr.length;
        for (let j = 0; j < size; j++) {
            let index = this.findMin(arr, j, size);
            swap(arr, index, j);
        }
    }

    findMin(arr, p1, p2) {
        let min = arr[p1];
        let index = p1++;
        for (p1; p1 < p2; p1++) {
            if (arr[p1] < min) {
                min = arr[p1];
                index = p1;
            }
        }
        return index;
    }

    //run 1 iteration only of the algorithm
    next(arr) {
        if(this.counter < arr.length)
            this.nextStep(arr, this.counter);
        this.counter++;
    }

    nextStep(arr, j) {
        let index = this.findMin(arr, j, arr.length);
        this.visualizer.selectedItemIndex = index;
        swap(arr, index, j);
    }
}