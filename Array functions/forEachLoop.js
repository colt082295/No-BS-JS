// A forEach loop is very similar to a classic for loop.

let arr = [1,5,6,7,3,8];

arr.forEach(function(item,index) {
    console.log(item,index);
});

// We can shorten this by using ES6:

arr.forEach((item,index) => console.log(item,index));