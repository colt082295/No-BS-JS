// This is the classic for loop that's been used to iterate through an array forever.
// There are cleaner, more readable ways to iterate through arrays (looking @ you forEach), but you'll find that in most cases the for loop is simply most efficient.

let arr = [1,5,6,7,3,8];

// What we do is set the index = 0, make sure the index only goes as long as the array length, and then we add 1 to the index variable.
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // "arr[i]" allows us to specify the item we want in the array by using the index.
}

// We also have the option to discontinue the loop whenever we want by using "break".

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i],i);
    if(arr[i] === 6) { // We check to see if the current array value = 6.
        break; // If it does, then we'll stop iterating through the array by using break.
    }
}