class SortingAlgorithm {
	//sizevector and time vector are used in plotting
	constructor() {
		this.sizeVector = [];
		this.timeVector = [];
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
	sort_alg(arr) {
	}

	//run 1 iteration only of the algorithm
	next() {

	}
}