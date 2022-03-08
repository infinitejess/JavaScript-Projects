//Ternary operatior
function Vote_Function () {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are able";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Constructor function for Vacation objects
function Vacation(City, Dates, Friend, Activity) {
    this.Vacation_City = City;
    this.Vacation_Dates = Dates;
    this.Vacation_Friend = Friend;
    this.Vacation_Activity = Activity;
}
//Declaring variables
var X = new Vacation("Bangkok", "July 1-10", "Jp", "Muay Thai");
var Y = new Vacation("Ibiza", "August 11-18", "Mary", "Dancing");
var Z = new Vacation("Iceland", "September 12-17", "Chris", "Camping");

//Displaying constructor function results
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Jess won a vaction to " +X.Vacation_City+ " for " +X.Vacation_Dates + " with "+X.Vacation_Friend +" where they will do " +X.Vacation_Activity + " for fun.";

}

//Nested function
function count_Function () {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one () {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
