var igrButton = document.getElementById("igr");
var PLButton = document.getElementById("PL");
var HIWEButton = document.getElementById("HIWE");
var PWPButton = document.getElementById("PWP");

var crimeButton = document.getElementById("crimeButton");
var cButton = document.getElementById("cButton");
var eButton = document.getElementById("eButton");

var lam = document.getElementById("lam");
var lat = document.getElementById("lat");
var las = document.getElementById("las");

var TASL = document.getElementById("TASL");
var WCTU = document.getElementById("WCTU");
var WONPR = document.getElementById("WONPR");

var igrdiv = document.getElementById("igrdiv");
var PLdiv = document.getElementById("PLdiv");
var PWPdiv = document.getElementById("PWPdiv");
var entrance = document.getElementById("entrance");

var WONPRdiv = document.getElementById("WONPRdiv");
var WCTUdiv = document.getElementById("WCTUdiv");
var TASLdiv = document.getElementById("TASLdiv");

var curruption = document.getElementById("curruption");
var crime = document.getElementById("ocrime");
var enforcement = document.getElementById("enforce");

var lasdiv = document.getElementById("lasdiv");
var latdiv = document.getElementById("latdiv");
var lamdiv = document.getElementById("lamdiv");

var backdiv = document.getElementById("backbutton");

var reset = document.getElementById("reset");

var HIWEdiv = document.getElementById("HIWE");

var info = document.getElementById("info");

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