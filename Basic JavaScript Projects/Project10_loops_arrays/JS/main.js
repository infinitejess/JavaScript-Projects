//Looping through until A is greater than 13
function Call_Loop() {
    var B = "";
    var A = 3;
    while(A<13) {
        B += "<br>The number is " + A;
        A++;
    }
    document.getElementById("Loop").innerHTML = B;
} 

//Repeatedly for all iterations known
var Music = ["Drums", "Bass", "Violin", "French Horn", "Tamborine"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Music.length; Y++) {
        Content += Music[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
  }

 //Array
 function array_Function() {
     var Vehicle = [];
     Vehicle [0] = "BMW";
     Vehicle [1] = "Ford";
     Vehicle [2] = "Toyota";
     Vehicle [3] = "Chevy";
     document.getElementById("Array").innerHTML = Vehicle [2] +" is this most popular car brand among commuters.";
 }

 //Constant practice
function constant_function() {
    const Pet_Dog = {name:"Nami", breed:"mini aussie", color:"tri-color"};
    Pet_Dog.breed = "Aussie";
    Pet_Dog.age = "1.5";
    document.getElementById("Constant").innerHTML = "My pet " +Pet_Dog.name+ " is an " + Pet_Dog.breed+ " and she is "+Pet_Dog.age;
}

//Let
function let_function() {
   let X=10;
   X +=11; 
   document.getElementById("Math").innerHTML = X;
}

//Creating object using let 
let Student = {
    Name: "Jess ",
    Grade: "Senior ",
    GPA: "3.57 ",
    Major: "Underwater Basket Weaving",
    College : function() {
        return "The student's name is " + this.Name + "and she is a "+this.Grade+ "with a GPA of "+this.GPA+ "and has a major of "+this.Major+".";
    }
} ;
document.getElementById("Student_Object").innerHTML = Student.College ();