//1--
function clickme(){
    document.getElementById("hello").innerText = "MERN stack"
    }
    
    
    //2--
    function touch(){
     document.getElementsByClassName("dom")[0].innerText = "Im First h1 Element"
     
    }
    
    
    
    //3--
    function time(){
    
        let i= new Date().toLocaleTimeString();
        document.getElementById("clock").innerText=i;
    }
    let sec = 1000;
    setInterval(time, sec);
    
    
    
    //4--
    function button(){
    document.getElementById("h1").innerText = "Welcome to Elevation Academy"
    }
    
    
    
    //5
    function hide(){
        document.getElementById("hideme").style.display="none"
    }
    

    /*
    6. Given an array of 0's and 1's find out number of 0's
    function numberOfZeros(array) {
        var zeros = [];
        var ones=[]
        for(var i = 0; i < array.length; i ++){
            if(array[i] === 0) {
                zeros.push(array[i]);
            }
        }
        console.log("Numbers of zeros ="+zeros.length);
        for(var j = 0; j < array.length; j ++){
      if(array[j] === 1) {
                ones.push(array[j]);
            }
        }
        console.log("Numbers of ones ="+ones.length);
    }
    numberOfZeros([0,1,1,0,0,0,0,0,1,1,1,1,1,1]);


7. Given an array find out total no. of odd and even nos.
     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let odd = 0;
 let even = 0;
    for (let i = 0; i < array.length; i++) {
         if (array[i] & 1 == 1)
             odd++;
         else
             even++;
     }
 console.log("Even =", even);
  console.log("Odd = ", odd);



8. Given a string find out number of vowels</p>

    Array.from(str) .filter(letter => 'aeiou'.includes(letter)).length;
  console.log(countVowels('abcdefghijklmnopqrstuvwxyz'));


9.Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same


    obj = {name: "bittu", age: 26}
arr =["bittu", 26]
console.log(obj)
console.log(arr)
function myname() {
  const obj1Length = Object.keys(obj).length;
  const obj2Length = Object.keys(arr).length;

  if (obj1Length == obj2Length){
    return Object.keys(obj1Length).every(
      key => obj2.hasOwnProperty(key) && obj2[key] == obj1[key])
  }
  return false
}
console.log(myname())
*/



