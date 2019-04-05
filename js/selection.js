class SelectionSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr, saveSwap) {
        let size = arr.length;
        for (let j = 0; j < size; j++) {
            let index = this.findMin(arr, j, size, saveSwap);
            this.swap(arr, index, j, saveSwap);
        }
    }

    findMin(arr, p1, size, saveSwap) {
        let min = arr[p1];
        let index = p1++;
        for (p1; p1 < size; p1++) {
            if (arr[p1] < min) {
                min = arr[p1];
                index = p1;
            }
            //this.swap(arr, p1, p1, saveSwap);
        }
        return index;
    }
}