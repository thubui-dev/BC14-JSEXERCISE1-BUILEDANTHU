//EXERCISE 1
function calculateMoney() {
    var numberWork = document.getElementById("textJs").value;
    console.log("Salary amount:", numberWork*100000);
}



//EXERCISE 2
function calculateNumber() {
    var numberFirst = parseInt(document.getElementById("numberFirst").value);
    var numberSecond = parseInt(document.getElementById("numberSecond").value);
    var numberThird = parseInt(document.getElementById("numberThird").value);
    var numberFourth = parseInt(document.getElementById("numberFourth").value);
    var numberFifth = parseInt(document.getElementById("numberFifth").value);
    var numberAverage = (numberFirst + numberSecond + numberThird + numberFourth + numberFifth);
    console.log("The average number:", numberAverage / 5);
}



//EXERCISE 3
function exchangeMoney() {
    var exchangeUsd = document.getElementById("exchangeUsd").value;
    console.log("Exchange Money:", exchangeUsd*23500);
}


//EXERCISE 4
function calculateRectangle() {
    var widthRectangle = parseInt(document.getElementById("widthRectangle").value);
    var heightRectangle = parseInt(document.getElementById("heightRectangle").value);
    var numberArea = (widthRectangle * heightRectangle);
    var numberPerimeter = (widthRectangle + heightRectangle)*2;
    console.log("Area of Rectangle:", numberArea);
    console.log("Perimeter of Rectangle:",numberPerimeter);
}


//EXERCISE 5
function calculateSum() {
    var numberSum = parseInt(document.getElementById("numberSum").value);
    var unit = numberSum % 10;
    var dozens = Math.floor(numberSum / 10);
    var numberSum = unit + dozens;
    console.log("Total of sum:", numberSum);
}