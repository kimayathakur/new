// const prompt = require('prompt-sync')();
// const name = prompt("What is your name? ");
// console.log("Hello, " + name + "!");
//  function square(x)
//  {
//     let ans=0;
//     ans=x*x;
//     return ans;
//  }
//  console.log ("the answer is:"+square(9));
 function greet(name,ca)
 {
    console.log("hello,"+name + "!");
    ca();

 }
 function g()
 {
    console.log("goodbye!");
 }
 greet("kimaya",g);