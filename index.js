//Part 1: Stack Overflow
//Declare a global counter variable.

let counter = 0;

function incrementCounter() {
    try {
 // Increment the counter
        counter++;
        
 // Call the function recursively
        incrementCounter();
    } catch (error) {
// Log the error and the value of the counter
        console.error('An error occurred:', error);
        console.log('Counter value:', counter);
    }
}

// Start the recursive function
incrementCounter();
//Part 2: Trampolines
// A  recursive function using trampolining
let nestedArray = [1, [2, [3, 4]], [5, [6, [7, 8]]]];
//using recursion

function recur(a) {
    let newArr = [];
    for (let i =0 ; i < a.length; i++) {
        const element = a[i];
        if (Array.isArray(element)) {
            newArr.push(...recur(element))
        } else  {
            newArr.push(element)
        }
    }
    
    return newArr;
  }

 console.log(recur(nestedArray))
//Once your recursive function is complete, trampoline it.
function trampoline(fn){
    return function trampoline(...args){
        let result =fn();
        while (typeof result ==='function'){
            result =result();
        }
        return result;
    }
}
console.log(trampoline(nestedArray))

//Part 3: Deferred Execution