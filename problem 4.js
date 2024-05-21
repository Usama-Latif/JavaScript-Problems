// write a function checkTriangleType that takes three parameters representing the length of sides of triangle. the function should return a string indicating the type of triangle : 'equilateral' , 'isosceles', 'scalene'



// Solution 1
console.log(checkTriangleType(1, 6, 3));
console.log(checkTriangleType(1, 1, 1));
console.log(checkTriangleType(1, 6, 1));
console.log(checkTriangleType(2, 1, 1));
console.log(checkTriangleType(1, 1, 2));

function checkTriangleType(a, b, c) {
    if (a == b && a == c) {
        return 'This is Equilateral Triangle';
    }
    else if ((a == b || a == c) || (b == c)) {
        return 'This is Isosceles Triangle.'
    }
    else {
        return 'This is Scalene Triangle.'
    }
}