class HeapSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr, saveSwap) {
        
        this.heapSort(arr, saveSwap);
    }

    max_heapify(input, i, array_length, saveSwap) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;

        if (left < array_length && input[left] > input[max]) {
            max = left;
        }

        if (right < array_length && input[right] > input[max])     {
            max = right;
        }

        if (max != i) {
            this.swap(input, i, max, saveSwap);
            this.max_heapify(input, max, array_length, saveSwap);
        }
    }

    build_max_heap(input, saveSwap) {
        let array_length = input.length;

        for(var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
            this.max_heapify(input, i, array_length, saveSwap);
        }
    }

    heapSort(input, saveSwap) {
        let array_length = input.length;
        
        this.build_max_heap(input, saveSwap);

        for (var i = input.length - 1; i > 0; i--) {
            this.swap(input, 0, i, saveSwap);
            array_length--;          
            this.max_heapify(input, 0, array_length, saveSwap);
        }
    }
}