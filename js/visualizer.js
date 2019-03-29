class Visualizer {
	constructor() {
		this.arr = getRandomInputArray(100);

		//frameRate
		this.fps = 10;

		//width and hight
		this.w = document.getElementById("container").clientWidth;
		this.h = 150;

		//padding and space between items
		this.padding = 5;
		this.spaceBetween = 0.1;

		//item width
		this.rectWidth = (this.w - 2 * this.padding - this.spaceBetween * (this.arr.length - 1)) / this.arr.length;

		//special indexes
		this.selectedItemIndex = 0;

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
		p.background(0);
		for(var i = 0; i < this.arr.length; i++) {
			if(i == this.selectedItemIndex) p.fill(255);
			else p.fill(100);
			let mappedNumber = scale(this.arr[i], 0, Math.max.apply(null,this.arr), 0, this.h-2*this.padding);
			p.rect(this.x + i*this.rectWidth + i*this.spaceBetween, this.y - mappedNumber, this.rectWidth, mappedNumber);
		}
	}

	resize(p) {
		this.w = 0.9*document.getElementById("container").clientWidth;
		this.rectWidth = (this.w - 2 * this.padding - this.spaceBetween * (this.arr.length - 1)) / this.arr.length;
		p.resizeCanvas(this.w, this.h);
	}
}
