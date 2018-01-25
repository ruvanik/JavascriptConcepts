// Function Statement
function greet(name){
    console.log("Hello " + name);
}

greet('Ruvani');

// Function Literal
var greetFunc = function(name){
    console.log("Hello "+name);
};
greetFunc('Ruvani');


var firstname = "Ruvani";
// IIFE - Immediately Invoked Functions Expression
(function(name){
    var greeting = "Inside IIFE : "
    console.log(greeting + ' '+ name);
}(firstname))

