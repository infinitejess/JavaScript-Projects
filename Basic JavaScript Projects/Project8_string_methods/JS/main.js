//Putting the string together
function testFunction() {
    var one= "Jess is learning ";
    var two= "string methods ";
    var three= "in js!";
    var whole=one.concat(two, three);
    document.getElementById("test").innerHTML = whole;
}

//Taking a part of the string
function sliceFunction() {
    var full= "To be or not be, that is the question";
    var section= full.slice(0,15);
    document.getElementById("slice").innerHTML = section;
}

//Making the string all uppercase
function upperFunction() {
    var X= "this used to be all lower case";
    document.getElementById("upper").innerHTML = X.toUpperCase();
}


//Searching for a word
function searchFunction () {
    var sentence= "Where in the world is Nami?";
    document.getElementById("search").innerHTML = sentence.search("Nami");

}


//Changing a number to a string
function numbFunction() {
    var b= 34546;
    document.getElementById("numb").innerHTML = b.toString();
}

//Formats number to specific length
function precFunction() {
    var c=123.787897;
    document.getElementById("prec").innerHTML = c.toPrecision(4);
}

//converts number to string and rounds to specific decimals
function fixFunction() {
    var d=3.417896;
    document.getElementById("fix").innerHTML = d.toFixed(3);
}

//Returns primitive value of string
function valFunction() {
    var e="Goodnight Moon";
    document.getElementById("value").innerHTML = e.valueOf();
}