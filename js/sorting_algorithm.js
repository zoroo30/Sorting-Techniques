class SortingAlgorithm {
	//sizevector and time vector are used in plotting
	constructor() {
		this.sizeVector = [];
		this.timeVector = [];
		this.swaps = [];
	}

	//call sort array arr and push its size and sorting excuting time to be plotted later
	sort(arr) {
		this.sizeVector.push(arr.length);
		let start = performance.now();
	    arr = this.sort_alg(arr);
	    let end = performance.now();
		this.timeVector.push(end-start);
	}

	//sorting algorithm implementation
	sort_alg(arr, saveSwap) {
	}

	//run 1 iteration only of the algorithm
    setupStepMode(visualizer) {
        this.counter = 0;
        this.visualizer = visualizer;
        this.visualizer.selectedItemsIndexes = [];
    }

	next(arr) {
        if(this.counter < this.swaps.length){
            this.nextStep(arr, this.counter);            
        	this.counter++;
        }
        else {
        	this.swaps = [];
        	Controls.enableButton();
        }
    }

    nextStep(arr, j) {
    	this.visualizer.selectedItemsIndexes[0] = this.swaps[j].p1;
    	this.visualizer.selectedItemsIndexes[1] = this.swaps[j].p2;
       	swap(arr, this.swaps[j].p1, this.swaps[j].p2);
    }

	swap(arr, p1, p2, saveSwap) {
		let s = swap(arr, p1, p2, saveSwap);
	    if(saveSwap) this.swaps.push(s);
	}

	getSortSwaps(arr) {
		this.swaps = [];
		this.sort_alg(arr, true);
	}
}