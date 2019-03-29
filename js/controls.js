class Controls {
	constructor(sortingAlgorithms, visualizer) {
		this.sortingAlgorithms = sortingAlgorithms;
		this.visualizer = visualizer;
		this.update = () => {};
	}

	setControls(selectID, buttonID) {
		this.addOptionsToSelect(selectID);
		document.getElementById(buttonID).addEventListener("click", () => {
			Controls.disableButton(buttonID);
			this.visualizeAlgorithm(selectID);
		});
		document.getElementById(selectID).addEventListener("change", () => {
			Controls.enableButton(buttonID);
			this.update = () => {};
			this.visualizer.arr =  getRandomInputArray(this.visualizer.arrSize);
			this.setSwapsArr(selectID);
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
		this.setSwapsArr(selectID);
	}

	visualizeAlgorithm(selectID) {
		let key = document.getElementById(selectID).value;
		this.sortingAlgorithms[key].setupStepMode(this.visualizer);
  		this.update = () => this.sortingAlgorithms[key].next(this.visualizer.arr);
  		this.update();
	}

	setSwapsArr(selectID) {
		let clone = this.visualizer.arr.slice(0);
		this.sortingAlgorithms[document.getElementById(selectID).value].getSortSwaps(clone);
	}

	static disableButton(buttonID) {
		document.getElementById(buttonID || "btn_visualize").disabled = true;
	}

	static enableButton(buttonID) {
		document.getElementById(buttonID || "btn_visualize").disabled = false;
	}
}