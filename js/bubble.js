class BubbleSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr) {
        let size = arr.length;
        for (let j = 0; j < size - 1; j++) {
            var swapped = false;
            for (let i = 0; i < size - 1 - j; i++) {
                if (arr[i] > arr[i + 1]) {
                    swap(arr, i, i + 1);
                    swapped = true;
                }
            }
            if(!swapped) return;
        }
    }

    //run 1 iteration only of the algorithm
    next(arr) {
        if(this.counter < arr.length)
            this.nextStep(arr, this.counter);
        this.counter++;
    }

    nextStep(arr, j) {
        var swapped = false;
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
                this.visualizer.selectedItemIndex = i+1;
            }
        }
        if(!swapped) return;
    }
}