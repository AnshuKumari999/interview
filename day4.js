/*

1- What is a Temporal Dead Zone?
The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords,
but not with var. In ECMAScript 6, accessing a let or const variable before its declaration causes a ReferenceError.
The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

    
function some() {
    console.log(counter1); // undefined
    console.log(counter2); // ReferenceError
    var counter = 5;
    let counter1 = 2;
  }
  
2- What is the for-in loop in JavaScript? Give its syntax
The for-in loop is a special type of a loop that iterates over the properties of an object, or the elements of an array.

    for(variable in object) {
        // Code to be executed
    }
    
3- Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript
Local Scope :- variables declared inside a function is inside the local scope. They can only be accessed from within that function,
that means they can't be accessed from outside code.

    var a=4;
function add()
{
var  q=4;
console.log(a+b);


}
greet()

 console.log(a+q); //error
 //q will be not accesible as it was defined inside the function

Block scope :- is related to the variables declared using let and const. Variables declared with var do not have block scope.
Block scope tells us that any variable declared inside a block { }, can be accessed only inside that block and cannot be accessed outside of it.

    {
        let abcd = 45;
      }
       console.log(abcd); //reference error as it was defined inside the block
      
Functional Scope :- variables that are declared inside a function are called local variables and
in the function scope local variables are accessible anywhere inside the function

    function foo(){
        var fruit ='apple';
        console.log('inside function: ',fruit);
    }
    
    foo();                    //inside function: apple
    console.log(fruit);       //error: fruit is not defined 
scope chain :- JavaScript engine also uses Scope to find variables.

    var x=24;
function OuterFunction()
{
var s=224;

var innerfunction=function innerfunction()
{

console.log(s);

}
var innerfunction2=function innerfunction2()
{


console.log(x);

}
innerfunction();
innerfunction2();


}
OuterFunction();

4- What is difference between null and undefined and where to use what?
undefined:- In JavaScript, undefined means a variable has been declared but has not yet been assigned a value

    let a;
console.log(a) //Undefined

var testVar; alert(testVar); //shows undefined

 alert(typeof testVar); //shows undefined

null:- is an assignment value. It can be assigned to a variable as a representation of no value:

    var testVar = null; alert(testVar); //shows null

 alert(typeof testVar); //shows object

5- what is Symbol?
symbol is used to give an unique value which is immutable(which cannt be changed )

    const val=Symbol("Anshu")
const val2=Symbol("Anshu")
console.log(val===val1)
though the values and data type are same we will get an output of false because foe each and every symbol unique value is genereated

because everytime its creating unique symbol

6- Write code to explain map and filter in arrays
Map is used to retur a new Array
map is used to iterrate through each and every element in an array

    var n= [1,2,3,4,5];
    var mul = numbers.map(n => n * 2);
    conole.log(mul); // [2,4,6,8,10]
Filter:Which is used to filter the items in an array

    var n = [1,2,3,4,5];
          var greaterBy2 = numbers.filter(n => n > 2);
          console.log(greaterBy2); // [3,4,5]  
7- Explain passed by value and passed by reference
pass by value means that we pass the actual value of the variable into the function.
pass by reference means that instead of passing the value of the variable,we pass the address of variable(location) to the function.

    var a=2;
    var b=a;
    console.log(a);//2
    console.log(b);//2
    a=4;
    console.log(a);//4
    console.log(b);//2
8- Please explain Self Invoking Function and its code.
self invoking functions are kind of an anonymous function which gets invoked automatically after its declaration.we dont have to manually invoke it.

    (function(){
        let a="hello there!!!";
        console.log(a);
    })();

    */