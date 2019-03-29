//swap 2 elements p1 and p2 in array arr
function swap(arr, p1, p2) {
    temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
}

//return a random array with numbers from 0 to size - 1
function getRandomInputArray(size) {
	let arr = Array.from(Array(size).keys());
	shuffle(arr);
	return arr;
}

//randomly suffle array elements
function shuffle(arr) {
  var tmp, current, top = arr.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = arr[current];
    arr[current] = arr[top];
    arr[top] = tmp;
  }
}

//map a number from range to another
function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}