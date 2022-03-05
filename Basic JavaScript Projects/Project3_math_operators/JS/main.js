//Addition
function addFunction() {  
    var addition = 3 + 4;
    document.getElementById("Math").innerHTML = "3 + 4 = " + addition;
}
//Subtraction
function subFunction () {
    var subtract = 19 - 12;
    document.getElementById("Math2").innerHTML = "19 - 12 = " + subtract;
}
//Multiplication
function multiplyFunction () {
    var multiply = 10 * 5;
    document.getElementById("Math3").innerHTML = "10 * 5 = " + multiply;
}
//Division
function divideFunction () {
    var simple_math = 100 / 2;
    document.getElementById("Math4").innerHTML = "100 / 2 = " + simple_math;
}
//Multiple math types
function big_math () {
    var more_math = (8-3) * 6 /3 -7;
    document.getElementById("Math5").innerHTML = "8 minus 3, multiplied by 6, divided by 3 and then subtracting 7 = " +more_math;
}
//Moduls
function remainder () {
    var leftover = 35 % 4;
    document.getElementById("Math6").innerHTML = "When you divide 35 by 4 you have a remainder of " +leftover;
}
//Negation
function unary () {
    var a = 19;
    document.getElementById("Math7").innerHTML = -a;
}
//Increment
function increment () {
    var b = 10;
    b++;
    document.getElementById("Math8").innerHTML = "10 increased by 1 is " +b;
}
//Decrement
function decrement () {
    var c = 15;
    c--;
    document.getElementById("Math9").innerHTML = "15 decreased by 1 is " +c;
}
//Random
function random () {
    var d = (Math.random() *100);
    d
    document.getElementById("Math10").innerHTML = "You will find a random number between 1 and 100 every time you click here: " +d;
}
//Math object PI
function MathPI () {
    document.getElementById("Math11").innerHTML = "Math.PI is " + Math.PI;
}
