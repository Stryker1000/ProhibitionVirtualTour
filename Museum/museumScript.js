//igr = Important Groups Room
var igrButton = document.getElementById("igr");
//Prohibition Laws
var PLButton = document.getElementById("PL");
//How It Was Ended
var HIWEButton = document.getElementById("HIWE");
//Problems With Problems
var PWPButton = document.getElementById("PWP");

//Organized Crime Button
var crimeButton = document.getElementById("crimeButton");
//Curruption Button
var cButton = document.getElementById("cButton");
//Enforcement Button
var eButton = document.getElementById("eButton");

//Law Against Manufacturing
var lam = document.getElementById("lam");
//Law Against Transportation
var lat = document.getElementById("lat");
//Law Against Sale
var las = document.getElementById("las");

//The Anti Saloon League
var TASL = document.getElementById("TASL");
//Women's Christian Temperance Unit
var WCTU = document.getElementById("WCTU");
//Womens Organization for National Prohibition Reform
var WONPR = document.getElementById("WONPR");

var igrdiv = document.getElementById("igrdiv");
var PLdiv = document.getElementById("PLdiv");
var PWPdiv = document.getElementById("PWPdiv");
var entrance = document.getElementById("entrance");

var WONPRdiv = document.getElementById("WONPRdiv");
var WCTUdiv = document.getElementById("WCTUdiv");
var TASLdiv = document.getElementById("TASLdiv");

var curruption = document.getElementById("curruption");
//Organized Crime
var crime = document.getElementById("ocrime");
var enforcement = document.getElementById("enforce");

var lasdiv = document.getElementById("lasdiv");
var latdiv = document.getElementById("latdiv");
var lamdiv = document.getElementById("lamdiv");

//Where the Back Button is Located
var backdiv = document.getElementById("backbutton");
//The Reset Button
var reset = document.getElementById("reset");

var HIWEdiv = document.getElementById("HIWE");

//All Info Pararaphs and Headers
var info = document.getElementById("info");

//All of Entrance
var main = document.getElementById("main");
main.style.visibility = "hidden";
entrance.style.visibility = "visible";
console.log(eButton);

function resetButton() {
    main.style.visibility = "hidden";
    entrance.style.visibility = "visible";
}
console.log(igrdiv);
igrButton.onclick = function() {
    igrdiv.style.visibility = "visible";
    entrance.style.visibility = "hidden";
    backdiv.style.visibility = "visible";
};

HIWEButton.onclick = function() {
    location.href = "HIWE.html";
    entrance.style.visibility = "hidden";
    backdiv.style.visibility = "visible";
};

PLButton.onclick = function() {
    PLdiv.style.visibility = "visible";
    entrance.style.visibility = "hidden";
    backdiv.style.visibility = "visible";
    console.log(eButton);
};

PWPButton.onclick = function() {
    PWPdiv.style.visibility = "visible";
    entrance.style.visibility = "hidden";
    backdiv.style.visibility = "visible";
    console.log(eButton);
};

crimeButton.onclick = function() {
    crime.style.visibility = "visible";
    PWPdiv.style.visibility = "hidden";
    backdiv.style.visibility = "visible";
};

cButton.onclick = function() {
    PWPdiv.style.visibility = "hidden";
    curruption.style.visibility = "visible";
    backdiv.style.visibility = "visible";
};

eButton.onclick = function() {
    PWPdiv.style.visibility = "hidden";
    enforcement.style.visibility = "visible";
    backdiv.style.visibility = "visible";
    console.log(eButton);
};

lam.onclick = function() {
    PLdiv.style.visibility = "hidden";
    lamdiv.style.visibility = "visible";
    backdiv.style.visibility = "visible";
};

lat.onclick = function() {
    PLdiv.style.visibility = "hidden";
    latdiv.style.visibility = "visible";
    backdiv.style.visibility = "visible";
};

las.onclick = function() {
    PLdiv.style.visibility = "hidden";
    lasdiv.style.visibility = "visible";
    backdiv.style.visibility = "visible";
};

TASL.onclick = function() {
    igrdiv.style.visibility = "hidden";
    TASLdiv.style.visibility = "visible";
    backdiv.style.visibility = "visible";
};

WCTU.onclick = function() {
    igrdiv.style.visibility = "hidden";
    WCTUdiv.style.visibility = "visible";
    backdiv.style.visibility = "visible";
};

WONPR.onclick = function() {
    igrdiv.style.visibility = "hidden";
    WONPRdiv.style.visibility = "visible";
    backdiv.style.visibility = "visible";
};

reset.onclick = function() {
    main.style.visibility = "hidden";
    PLdiv.style.visibility = "hidden";
    PWPdiv.style.visibility = "hidden";
    igrdiv.style.visibility = "hidden";
    WONPRdiv.style.visibility = "hidden";
    WCTUdiv.style.visibility = "hidden";
    TASLdiv.style.visibility = "hidden";
    curruption.style.visibility = "hidden";
    crime.style.visibility = "hidden";
    enforcement.style.visibility = "hidden";
    lasdiv.style.visibility = "hidden";
    lamdiv.style.visibility = "hidden";
    latdiv.style.visibility = "hidden";
    entrance.style.visibility = "visible";
};