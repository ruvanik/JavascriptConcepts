

var firstname = "Ruvani";
// IIFE - Immediately Invoked Functions Expression
(function(name){
    var greeting = "Inside IIFE : "
    console.log(greeting + ' '+ name);
}(firstname))

