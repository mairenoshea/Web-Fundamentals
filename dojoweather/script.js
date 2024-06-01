var cookieContainer=document.querySelector(".cookiecontainer");

function hide(element) {
    element.remove();
}

var domWedHigh = document.querySelector("#wedhigh");
var domWedLow = document.querySelector("#wedlow");
var domThursHigh=document.querySelector("#thurshigh");
var domThursLow=document.querySelector("#thurslow");
var domFriHigh =document.querySelector("#frihigh");
var domFriLow=document.querySelector("#frilow");
var domSatHigh=document.querySelector("#sathigh");
var domSatLow=document.querySelector("#satlow");

var wedHighC = 24;
var wedLowC = 18;
var thursHighC = 27;
var thursLowC = 19;
var friHighC = 21;
var friLowC = 16;
var satHighC = 26;
var satLowC = 21;

function celsiusToFahrenheit (c) {
    f = (9/5)*c +32;
    return Math.round(f);
}

var wedHighF= celsiusToFahrenheit(wedHighC);
var wedLowF = celsiusToFahrenheit(wedLowC);
var thursHighF = celsiusToFahrenheit(thursHighC);
var thursLowF = celsiusToFahrenheit(thursLowC);
var friHighF = celsiusToFahrenheit(friHighC);
var friLowF = celsiusToFahrenheit(friLowC);
var satHighF = celsiusToFahrenheit(satHighC);
var satLowF = celsiusToFahrenheit(satLowC);


function changeTemp(element) {
    if (element.value=="F") {
        domWedHigh.innerText = wedHighF +"°";
        domWedLow.innerText = wedLowF +"°";
        domThursHigh.innerText= thursHighF +"°";
        domThursLow.innerText= thursLowF +"°";
        domFriHigh.innerText= friHighF +"°";
        domFriLow.innerText = friLowF +"°";
        domSatHigh.innerText= satHighF +"°";
        domSatLow.innerText= satLowF +"°";
    }
    else if (element.value=="C") {
        domWedHigh.innerText= wedHighC +"°";
        domWedLow.innerText= wedLowC +"°";
        domThursHigh.innerText = thursLowC +"°";
        domThursLow.innerText = thursLowC +"°";
        domFriHigh.innerText = friHighC +"°";
        domFriLow.innerText = friLowC +"°";
        domSatHigh.innerText = satHighC +"°";
        domSatLow.innerText = satLowC +"°";
    }
}


