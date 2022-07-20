/*

1. What are closures? Give an example of closure?

A closure can be defined as a JavaScript feature in which the inner function has access to the outer function variable. In JavaScript, every time a closure is created with the creation of a function.

The closure has three scope chains listed as follows:

Access to its own scope.
Access to the variables of the outer function.
Access to the global variables.

eg:
function fun(a)  
{  
function innerfun(b){  
return a*b;  
}  
return innerfun;  
}  
var output = fun(4);  
document.write(output(5));  
document.write(" ");  
document.write(output(6)); 

output:
20, 30

2.Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()?

call(): The JavaScript Function call() method is used to call a function contains this value and an argument provided individually. Unlike apply() method, it accepts the argument list.

Syntax
function.call(thisArg, arg1,arg2,....,argn)

eg:
function Emp(id,name) {  
  this.id = id;   
  this.name = name;  
}  
function PermanentEmp(id,name) {  
 Emp.call(this,id,name);  
}  
document.writeln(new PermanentEmp(101,"Anshu Kumari").name); 

output:
Anshu Kumari


apply(): The JavaScript Function apply() method is used to call a function contains this value and an argument contains elements of an array. Unlike call() method, it contains the single array of arguments.

Syntax
function.apply(thisArg, [array])

eg:
var array = [1,2,3,4];  
var newarray=[5,6,7,8]  
array.push.apply(array, newarray);  
document.writeln(array); 

output:
1,2,3,4,5,6,7,8

bind(): The JavaScript Function bind() method is used to create a new function. When a function is called, it has its own this keyword set to the provided value, with a given sequence of arguments.

Syntax
function.bind(thisArg [, arg1[, arg2[, ...]]]  

Parameter:
thisArg - The this value passed to the target function.

arg1,arg2,....,argn - It represents the arguments for the function.

eg:
var a = {  
  name: "Google",  
  getName: function() {  
    return this.name;  
  }  
}  
var unboundGetName = z.getName;  
var boundGetName = unboundGetName.bind(website);  
document.writeln(boundGetName());

output:
Google


3. What is creation phase and execution phase?

creation phase: The creation phase is the one in which the JS engine invokes a function but does not begin its execution. 
In this phase, the JS engine begins its compilation phase and scans the particular function code for compiling it but does not execute the code.

execution phase: The execution phase is the next phase after finishing the creation phase. 
An execution phase is the one where the JS engines scan through the function in the code once again, i.e., one more time for updating the variable object with the values of the variables and then run the code.

4.What are function constructors ?
    The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically,
    However, unlike eval, the Function constructor creates functions which execute in the global scope only.
    ex- 
        
    const sum = new Function('a', 'b', 'return a + b');
        console.log(sum(4, 7));
        
        output: 
        11
         
5.Explain prototypes ?
    Prototypes are the mechanism by which JavaScript objects inherit features from one another.
   
    ex- 
       function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.fullName=function()  
  {  
    return this.firstName+" "+this.lastName;  
  }  
  
var employee1=new Employee("Anshu","Kumari");  
var employee2=new Employee("Anshu", "Sree");  
document.writeln(employee1.fullName()+"<br>");  
document.writeln(employee2.fullName()); 

output:
Anshu Kumari
Anshu Sree
         
6.What is prototype chain ?
    Every object in JavaScript has a built-in property, which is called its prototype. 
    The prototype is itself an object, so the prototype will have its own prototype, 
    making what's called a prototype chain. The chain ends when we reach a prototype 
    that has null for its own prototype.
    Prototype chaining is used to build new types of objects based on existing ones.
    It is similar to inheritance in a class based language.
    ex-
        function me(name) {
            this.name = 'Anshu';
        }  
        Object.prototype.isPrototypeOf(me.prototype); // Returns true
         
7.Give an example of inheritance using function constructor
        function Person () {
    this.name = 'Anshu',
    this.age = 23,

     this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  
console.log(person2.age);    

output:
Anshu
23


         
8.What are callbacks?
    A callback function is a function passed into another function as an argument.
    This function is invoked inside the outer function to complete an action.
    ex-
        function createQuote(quote, callback){ 
  var myQuote = "Like Doctor always say, " + quote;
  callback(myQuote); 
}

function logQuote(quote){
  console.log(quote);
}

createQuote("eat your breakfast!", logQuote); 


Like Doctor always say, eat your breakfast!      
        
9.What is the use of setTimeout?
    The setTimeout() is a method inside the window object, it calls the specified function 
    or evaluates a JavaScript expression provided as a string after a given time period for only once.
    We all have used alarms or reminders several times, this setTimeout() method also 
    has the same purpose in web applications. We use this to delay some kind of executions.
    ex-
        /function greet() {
    console.log('Hello world');
}

setTimeout(greet, 3000);
console.log('This message will shown after 3 second');


10.What is an event loop and call stack?
    call Stack: The call stack is a LIFO queue (Last In, First Out).

The event loop continuously checks the call stack to see if there’s any function that needs to run.

While doing so, it adds any function call it finds to the call stack and executes each one in order.

Event loop: 

*/