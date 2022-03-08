// Global variable
X=10;
function add_1() {
    document.write(X + 12 +"<br>");
}

function add_2 () {
    document.write(X + 15 +"<br>");
}

add_1 ();
add_2 ();

//Local variable 
function multiply_1 () {
    var Y=2;
    document.write(Y*8 +"<br>");
}


//Debugging why Y doesnt work here
function multiply_2() {
    console.log(Y*4 +"<br>");
}
multiply_1 ();
multiply_2 ();

//Determining the time of day for the evening greeting
function dateFunction() {
    if (new Date ().getHours() > 15 ) {
        document.getElementById("date").innerHTML = "Good evening.";
    }
}
//Orignal if statement
function jessFunction() {
    if(100>10) {
        document.getElementById("Jess").innerHTML = "100 is more than 10.";
    }
}

//If else combo
function gradFunction() {
    year = document.getElementById("year").value;
    if (year <= 2000) {
        document.getElementById("grad_year").innerHTML = "You are a geezer!";    }
    else {
        document.getElementById("grad_year").innerHTML = "You are a spring daisy!";
    }
}


//If else if else combo example
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}