// console.log("Hello World!")



// let date = new Date()     # how to get a full year
// console.log(date.getFullYear())


// var a = 8      # tracking a variable
// console.log(a)
// var a = 34;
// console.log(a)


// let name = 'Deepak';
// console.log(typeof name)


// let age = 2;
// if(age > 24) console.log("Correct")
// else console.log("Incorrect")


// ********** Javascript Leetcode questions 


//   1 Create hello world funtion :      
// write a function createHelloWorld. It should return a new function 
// that always return "Hello World"


function createHelloWorld(){
   
                return function(){
                    console.log('hello world')
                }

}

const sayHello = createHelloWorld();
console.log(sayHello()); // Output: "Hello World"





//  this is not a leet code problem : scenario how to access child function from a parent function
// function parent (){

//     function child() {
//          console.log("Child")
//     }
//             return child
// }

// let a = parent();
// a()

