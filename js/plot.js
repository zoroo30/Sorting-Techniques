class Plot {
	constructor(sortingAlgorithms) {
		this.data = [];
		this.sortingAlgorithms = sortingAlgorithms;
	}

	runSorting(maxSize, shift) {
		for(let x = 0; x <= maxSize; x += shift) {
		    var arr = getRandomInputArray(x);
		    for (var key in this.sortingAlgorithms) {
		        this.sortingAlgorithms[key].sort(arr);
		    }
		}
	}

	draw(divID) {
		for (var key in this.sortingAlgorithms) {
		    this.data.push({
		      x: this.sortingAlgorithms[key].sizeVector,
		      y: this.sortingAlgorithms[key].timeVector,
		      mode: 'lines+markers',
		      type: 'scatter',
		      name: key
		    });
		}

		Plotly.newPlot(divID, this.data);
	}

	resize(divID) {
	 	Plotly.relayout(divID, {
	    	width: document.getElementById("container").clientWidth,
	 	})
	}
}
