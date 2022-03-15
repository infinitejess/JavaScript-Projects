//this function is getting the price associsted with the selected size
function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    //this for loop iterates through each size until it finds the selected one
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }//Loops determiing price for each size option you can select
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal =8;
    } else if (selectedSize == "Medium Pizza") {
        sizeTotal =10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal =14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal =16;
    }
    //All these variables will be passed to each function
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);
};
//This function is for getting the total number of toppings for the total price
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    //this for loop iterates to find any checked box in the toppings class
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    //price based on topping numbers but 1 topping is free so it's removed from total price
    if (toppingCount > 1) {
        toppingTotal = (toppingCount -1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); //adds size total from previous fucntion to topping total
    console.log("total selected topping items: "+toppingCount); //total number of toppings being charged for
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");//price of topping total
    console.log("topping text1: "+text1); 
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1; //printing You Ordered: show text div in html
    document.getElementById("totalPrice").innerHTML= "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; //printing total $ to the totalPrice div in html
};