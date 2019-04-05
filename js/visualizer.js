class Visualizer {
	constructor() {
		this.arrSize = 50;
		this.arr = getRandomInputArray(this.arrSize);

		//frameRate
		this.fps = 100;

		//width and hight
		this.w = 0.9*document.getElementById("container").clientWidth;
		this.h = 150;

		//padding and space between items
		this.padding = 5;
		this.spaceBetween = 10;

		//item width
		this.rectWidth = (this.w - 2 * this.padding - this.spaceBetween * (this.arr.length - 1)) / this.arr.length;

		//special indexes
		this.selectedItemsIndexes = [];

		//starting x and y (don't change)
		this.x = this.padding;
		this.y = this.h - this.padding;
	}

	setup(p) {
		p.createCanvas(this.w, this.h);
		p.frameRate(this.fps);
	}

	draw(p) {
		this.updateDrawing(p);
	}

	updateDrawing(p) {
		p.background(255);
		for(var i = 0; i < this.arr.length; i++) {
			if(this.selectedItemsIndexes.includes(i,0)) p.fill("#000");
			else p.fill("#898989");
			let mappedNumber = scale(this.arr[i], 0, Math.max.apply(null,this.arr), 0, this.h-2*this.padding);
			p.noStroke();
			p.rect(this.x + i*this.rectWidth + i*this.spaceBetween, this.y - mappedNumber, this.rectWidth, mappedNumber);
		}
	}

	resize(p) {
		this.w = 0.9*document.getElementById("container").clientWidth;
		this.rectWidth = (this.w - 2 * this.padding - this.spaceBetween * (this.arr.length - 1)) / this.arr.length;
		p.resizeCanvas(this.w, this.h);
	}
}
