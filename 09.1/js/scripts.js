// scripts.js

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		return "Data error!";
	} else {
		return a * h / 2;
	}
	console.log(getTriangleArea(10, 6));

}

var triangle1Area = getTriangleArea(10, 15) 

var triangle2Area = getTriangleArea(12, 25);

var triangle3Area = getTriangleArea(8, 7);

var triangle4Area = getTriangleArea(-4, 0);