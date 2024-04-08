var arr=[0,1,2]
var r= Math.floor((Math.random())*256);
var g= Math.floor((Math.random())*256);
var b= Math.floor((Math.random())*256);
//geneartes random RGB values
document.getElementById("Color").innerHTML="("+r+" ,"+g+" ,"+b+")";
// display the RGB values
var index=Math.floor((Math.random())*3);
//selection
document.getElementById(index).style.backgroundColor="rgb("+r+" ,"+g+" ,"+b+")";
//Removing the correct index from the array
arr.splice(index,1);
//Genrating an incorrect RGB color
var r1= Math.floor((Math.random())*256);
var g1= Math.floor((Math.random())*256);
var b1= Math.floor((Math.random())*256);

document.getElementById(arr[0]).style.backgroundColor="rgb("+r1+" ,"+g1+" ,"+b1+")";


var r2= Math.floor((Math.random())*256);
var g2= Math.floor((Math.random())*256);
var b2= Math.floor((Math.random())*256);

document.getElementById(arr[1]).style.backgroundColor="rgb("+r2+" ,"+g2+" ,"+b2+")";

//Function to handel the guessing 
function guess(){
    //check if the chosen button is correct
    if (document.activeElement.id==index){
        //displaying correct masage in green
        document.getElementById("Color").innerHTML="CORRECT!";
        document.getElementById("Color").style.color="darkgreen";
    }
    else{
        //displaying wrong massage in red
        document.getElementById("Color").innerHTML="WRONG!";
        document.getElementById("Color").style.color="red";
    }
    //Removing onclick attribute form all buttons
    document.getElementsByClassName("button")[0].removeAttribute
    ("onclick");
    document.getElementsByClassName("button")[1].removeAttribute
    ("onclick");
    document.getElementsByClassName("button")[2].removeAttribute
    ("onclick");
    }
// function for replaying the game
function replay(){
    //reloading the page to start a new game
    window.location.reload();

}
