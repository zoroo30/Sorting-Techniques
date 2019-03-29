class HeapSort extends SortingAlgorithm {
    //sorting algorithm implementation
    sort_alg(arr, saveSwap) {
        
        this.heapSort(arr, saveSwap);
    }

    heap_root(input, i, array_length, saveSwap) {
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
            this.heap_root(input, max, array_length, saveSwap);
        }
    }


     heapSort(input, saveSwap) {
        let array_length = input.length;

        for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
            this.heap_root(input, i, array_length, saveSwap);
        }

        for (i = input.length - 1; i > 0; i--) {
            this.swap(input, 0, i, saveSwap);
            array_length--;
          
          
            this.heap_root(input, 0, array_length, saveSwap);
        }
    }
}