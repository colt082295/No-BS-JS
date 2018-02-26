// A forIn loop is pretty similar to the classic for loop. Some differences are that it takes less setup code and it less efficient(because it has to find next property in the object that is enumerable). Typically you wouldn't use this to iterate through an array, but instead through an object.

let arr = [1,5,6,7,3,8];

for(num in arr) { // For each number in the array
    console.log(num);
}

// Now we'll go through an object.

var obj = {
    a: "Val 1",
    b: "Val 2"
}

for(key in obj) {
    if (obj.hasOwnProperty(key)) { // We check to make sure that the key you get is an actual property of the object
        console.log(key, obj[key]);
    }
}