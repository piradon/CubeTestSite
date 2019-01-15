
var whiteColor="rgb(255, 255, 255)";
var blueColor="rgb(3, 79, 132)";
var redColor="rgb(189, 61, 58)";
var orangeColor="rgb(228, 122, 46)";
var greenColor="rgb(0, 128, 0)";
var yellowColor="rgb(236, 219, 84)";

var i=0;

var colorArray = [whiteColor, blueColor, redColor, orangeColor, greenColor, yellowColor];

function changeColor (el) {
   
    const myStyle = getComputedStyle(el);
    const currentColor=myStyle.backgroundColor;
    var indexOfColor=colorArray.indexOf(currentColor);
    
    if(indexOfColor<colorArray.length-1){
        indexOfColor=indexOfColor+1;
        el.style.background=colorArray[indexOfColor];
    }
    else {
        el.style.background=colorArray[0];
    }
    
  
}





