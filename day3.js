/*
1. What are promises and why do we need them?

Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 

Benefits of Promises: 
Improves Code Readability
Better handling of asynchronous operations
Better flow of control definition in asynchronous logic
Better Error Handling

A Promise has four states: 
fulfilled: Action related to the promise succeeded
rejected: Action related to the promise failed
pending: Promise is still pending i.e. not fulfilled or rejected yet
settled: Promise has fulfilled or rejected
A promise can be created using Promise constructor.

Syntax
var promise = new Promise(function(resolve, reject){
     //do something
});

eg:
const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise!");
    }, 5000);
  },
  (reject) => {}
);

promise.then((value) => console.log(value));



2. What is the purpose of async/await keywords?
It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event-loop. Async functions will always return a value.
eg: 
const getData = async() => {
    var data = "Hello World";
    return data;
}
 
getData().then(data => console.log(data));
Output:

Hello World

Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

eg
const getData = async() => {
    var y = await "Hello World";
    console.log(y);
}
 
console.log(1);
getData();
console.log(2);
Output:

1
2
Hello World

The browsers supported by Async/Await Function are listed below:

Google Chrome 55 and above
Firefox 52 and above
Apple Safari 10.1 

3. What is hosting?
hoisting allows us  to use functions and variables before they're declared.
Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution
It allows us to call functions before even writing them in our code. 
 JavaScript only hoists declarations, not the initializations.

 eg:
function cHoist(){
	a = 10;
	let b = 50;
}
Hoist();

console.log(a); // 10
console.log(b); // ReferenceError : b is not defined

Output:
 10
ReferenceError : b is not defined


4. What is the DOM?

The document object represents the whole html document.

When html document is loaded in the browser, it becomes a document object. It is the root element that represents the html document. It has properties and methods. 
By the help of document object, we can add dynamic content to our web page.

5. Difference between undefined vs not defined vs NaN:
The undefined property indicates that the variable has not been assigned a value or not declared at all. 
The NaN property represents a “Not-a-Number” value. The NaN property indicates that a value is not a legitimate number. 
not defined: In JavaScript, it is one of the reference errors that JavaScript will throw when someone accesses the variable which is not inside the memory heap.

6. How many operators do we have in JS ?
An operator is used for manipulating a certain value or operand. Operators are used to perform specific mathematical and logical computations on operands.
Arithmetic Operators
Comparison Operators
Bitwise Operators
Logical Operators
Assignment Operators

7. What are pure functions?

A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.
 It does not depend on any state or data change during a program’s execution.it only depends on its input arguments.

eg:
function calculate( Price ) {
    return Price * 0.05;
}

8. What is callback hell?
Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
 Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code

9. What is promise chaining?

Promise chaining allows us to control the flow of JavaScript asynchronous operations.
 By using Promise chaining, we can use the returned value of a Promise as the input to another asynchronous operation.

 10. What are arrow functions?
 Arrow functions are anonymous functions (the functions without a name and not bound with an identifier). They don't return any value and can declare without the function keyword. 
 Arrow functions cannot be used as the constructors. The context within the arrow functions is lexically or statically defined. They are also called as Lambda Functions

 syntax:
 const functionName = (arg1, arg2, ?..) => {  
    //body of the function  
} 

11.Give an example of async/await?
 async: 

const getData = async() => {
    var data = "Hello Eberyone";
    return data;
}
getData().then(data => console.log(data));
Output:

Hello Everyone



await:


eg
const getData = async() => {
    var y = await "Hello Everyone";
    console.log(y);
}
 
console.log(1);
getData();
console.log(2);
Output:

1
2
Hello World


*/