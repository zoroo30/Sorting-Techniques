class Controls {
	constructor(sortingAlgorithms, visualizer) {
		this.sortingAlgorithms = sortingAlgorithms;
		this.visualizer = visualizer;
		this.update = () => {};
	}

	setControls(selectID, buttonID) {
		this.addOptionsToSelect(selectID);
		document.getElementById(buttonID).addEventListener("click", () => this.visualizeAlgorithm(selectID));
		document.getElementById(selectID).addEventListener("change", () => {
			this.update = () => {};
			this.visualizer.arr =  getRandomInputArray(100);
		});
	}

	addOptionsToSelect(selectID) {
		var sel = document.getElementById(selectID);
		for(var key in this.sortingAlgorithms) {
			var opt = document.createElement('option');
			opt.appendChild( document.createTextNode(key) );
			opt.value = key;
			sel.appendChild(opt); 
		}
	}

	visualizeAlgorithm(selectID) {
		let key = document.getElementById(selectID).value;
		this.sortingAlgorithms[key].setupStepMode(this.visualizer);
  		this.update = () => this.sortingAlgorithms[key].next(this.visualizer.arr);
  		this.update();
	}
}