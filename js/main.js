let sortingAlgorithms = {
    "Bubble sort": new BubbleSort(),
    "Insertion sort": new InsertionSort(),
    "Selection sort": new SelectionSort(),
    "Merge sort": new MergeSort(),
    "Quick sort": new QuickSort(),
    "Heap sort": new HeapSort()
};

let mainPlot = new Plot(sortingAlgorithms);
mainPlot.runSorting(20000, 2000);
mainPlot.draw("plot");

let visualizer = new Visualizer();

let controls = new Controls(sortingAlgorithms, visualizer);
controls.setControls("algorithm_select", "btn_visualize");


let sketch = function(p) {
  p.setup = function() {
    visualizer.setup(p);
  };

  p.draw = function() {
    controls.update();
    visualizer.draw(p);
  };

  p.windowResized = function() {
    visualizer.resize(p);
  };
};

let myp5 = new p5(sketch,"canvas");



window.onresize = function() {
  mainPlot.resize("plot");
}

$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });