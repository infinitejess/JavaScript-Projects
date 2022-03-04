function My_First_Function () {
    var str = "This is the button text!"; //Assigning variable str
    document.getElementById("Button_Text").innerHTML = str; //Assigning value to element
    var below = "This is the"; //Assigning variable below
    below += " changed text you see!"; //adding to below string
    document.getElementById("below").innerHTML = below; //Assigning value to element
}