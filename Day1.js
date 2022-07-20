
/*
1.Difference between “ == “ and “ === “ operators.
ans--
== and === known as comparison operators.
The difference between == and === is--->
"==" only used for checks only values, and
"===" is used to checks both value and datatypes.
var a="A";
var b= A;
console.log(a==b); It will returns true because it only check values not data types
console.log(a===b); It returns false because for a and b values are same but a is string type and b is number type, so that datatypes are not same.


2. What is the spread operator?
Ans:
(...) Spread operator allows an iterable to expand in places where 0+ arguments are expected.
It is mostly used in the variable array where there is more than 1 values are expected.
It allows us the privilege to obtain a list of parameters from an array.
Syntax of (...) Spread operator is same as Rest parameter but it works completely opposite of it.
let arr = ["a","b","c","d","e"];
let arr2 = [1,2,3,4,5];

arr = [...arr,...arr2];
console.log(arr); output-['a', 'b', 'c', 'd','e' 1, 2, 3,4,5]

3.What are the differences between var, let and const?
ans->
var is a Global or Functional Scoped.it can be reassigned or redeclared and it can be modified later.
in other side let and const are block scoped, let and const both cannot be reassigned or redeclare.
but let can be modified later,
and const cannot be modified later.

4.What is execution context
Ans--
The browser's JavaScript engine then creates a special environment to handle the transformation
and execution of this JavaScript code. This environment is known as the Execution Context.
Execution context is defined as the environment in which the JavaScript code is executed.
By environment, I mean the value of this , variables, objects, and functions JavaScript code has access to at a particular time.
There are two kinds of Execution Context in JavaScript:
● Global Execution Context (GEC)
● Function Execution Context (FEC)

5.What is meant by first class functions
Ans--
A programming language is said to have First-class functions when functions in that language are treated like any other variable.
For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

eg:
 Assign a function to a variable:
const a = function() {
console.log("Helo");
}
a(); 

output:
Hello

*/