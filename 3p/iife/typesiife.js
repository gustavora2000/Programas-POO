//a name function declaration : the most common one 
function foo() {
    console.log('Called foo!'); //print('called bar!');
}

//an anonymous function expression
var bar = function () {
    console.log('Called bar!');//print('Called bar!');
};

//an anonymous iife function
(function () {
    console.log('This funtion is invoked inmmediately!');//print('This function is onvoked immediately!');
})();
