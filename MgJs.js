

//alert("welcome to Mg Calculator");

// creating a function to calculate the amount of Mg with help of given values

function calculateMg() {  // calculateMg

    var Amount1 = document.getElementById("Amount1").value;
    var Amount2 = document.getElementById("Amount2").value;
    var Amount3 = document.getElementById("Amount3").value;

    var Cl = (Amount2 * 400.8);                       //constant term is 400.8
    var CACO3 = (Amount1 - Cl);
    var Ml = (Amount3 * 1.645);                    //1.645 another constent term multiply with Ml water 
    var Mg = (Cl / Ml);
    var calMg = Mg.toFixed(2);   // round off the result

    //  write/dispaly the output on webpage
    document.getElementById("output").innerHTML = calMg;
}
