class HeapSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr) {
        let size = arr.length;
        let sorted = new Array(size);
        this.heapSort(arr, size, sorted);
        arr = sorted;
    }

    maxHeapify(node, array, size) {
        if ((node * 2) > size)
            return;
        let child1, child2;
        if ((node * 2 + 1) > size - 1) {
            child1 = 0;
        }
        else {

            child1 = array[node * 2 + 1];
        }
        if ((node * 2 + 2) > size - 1) {
            child2 = 0;
        }
        else {

            child2 = array[node * 2 + 2];
        }
        let bigger = child2;
        let index = node * 2 + 2;
        if (child1 > bigger) {
            bigger = child1;
            index = node * 2 + 1;
        }
        if (bigger > array[node]) {
            swap(array, node, index);
        }
        else
            return;
        this.maxHeapify(index, array, size);

    }

    buildMaxHeap(array, size) {
        for (let i = (size - 2) / 2; i > -1; i--) {
            this.maxHeapify(Math.floor(i), array, size);
        }
    }

    heapSort(array, size, sorted) {
        for (let i = 0; i < size; i++) {
            this.buildMaxHeap(array, size);
            sorted[i] = array[0];
            array[0] = 0;
        }
        let stop = Math.floor(size / 2);
        for (let i = 0, j = size - 1; i < stop; i++ , j--) {
            swap(sorted, i, j);
        }
    }

    //run 1 iteration only of the algorithm
    next() {

    }
}