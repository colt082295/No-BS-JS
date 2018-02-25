// Array map is a higher order function that returns a new array that has a function applied to each element in the array.

let Arr = [1,2,3,4,5];

// Let's map through the array and simply add one to each item.

let newArr = Arr.map(function(item,index) {
    return item+1;
});

// Remember it returns a new array - it doesn't modify the original.
// You could simply set the new array = to the original array variable to avoid any bugs.
// EX:

let Arr = [1,2,3,4,5];
Arr = Arr.map(function(item,index) {
    return item+1;
});

// We can shorten this using ES6.

let Arr = [1,2,3,4,5];
Arr = Arr.map((item,index) => item+1);


// More resources to look at:
/**************************************************************************************************************/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://www.youtube.com/watch?v=EnYlhbpzhU4