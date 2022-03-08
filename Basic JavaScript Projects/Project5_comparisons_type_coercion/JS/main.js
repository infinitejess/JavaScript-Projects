function my_Function() {
    document.getElementById("Test").innerHTML = !(11>10);  //Using the Not operator 
}
document.write((typeof "Jess")+"<br>"); //Printing data type of Jess
document.write(("String" + 5)+"<br>");;  //Adding a number to a string
document.write((10>5)+"<br>"); //Using the greater than symbol
document.write((1>5)+"<br>");  //Using the less than symbol
document.write((5>10 || 10>4)+"<br>"); //Using or operator, one is true so true
document.write((5>10 || 10>20)+"<br>"); //Using the or operator, neither true so false
document.write((5 > 3 && 6 < 10)+"<br>"); //Using the and operator, both are true so true
document.write((5 > 3 && 6 > 10)+"<br>"); //using the and operator, only one is true so false
X=5; //Declaring X
Y=10; //Declaring Y
Z=10;  //Declaring Z
document.write((X==Y)+"<br>"); //Checking if X and Y are equal in value
document.write((Z==Y)+"<br>"); //Checking is Z and Y are equal in value
document.write((X===Y)+"<br>"); //Checking if X and Y are equal in value and type
document.write((Z===Y)+"<br>"); //Checking ig Z and Y are equal in value and type