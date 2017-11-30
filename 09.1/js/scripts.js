// scripts.js

function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return "Data error!";
    } else {
        return a * h / 2;
    }

}


var triangle1Area = getTriangleArea(10, 15);
console.log('Value of variable: ' + triangle1Area);

var triangle2Area = getTriangleArea(12, 25);
console.log('Value of variable: ' + triangle2Area);

var triangle3Area = getTriangleArea(8, 7);
console.log('Value of variable: ' + triangle3Area);

var triangle4Area = getTriangleArea(-4, 0);
console.log('Value of variable: ' + triangle4Area);