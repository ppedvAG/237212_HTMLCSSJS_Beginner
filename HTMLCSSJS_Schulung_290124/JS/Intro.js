// Kommentar

// const Beispiel
const Konstante = "Hallo";

// Let Beispiel
let Variable1 = 10;

// var Beispiel
var Variable2 = 20;

// Bool 
var Wahr = true;
var Falsch = false;

// Undefined / Null
var Undefiniert = undefined;
var NullWert = null;

let Ergebnis = Variable1 + Variable2;
console.log(Ergebnis);
console.log(Wahr);

let assignment = Ergebnis + Variable1;
console.log(assignment);

console.log(Variable1 += Ergebnis)
// Variable1 (10) = Variable1 (10) + Variable2(20)
// Neuer Wert => 30

// Zwei Variablen erstellen mit let
// Diese zwei Variablen zusammen addieren
// und das Ergebnis ausgeben auf der Konsole

// Beispiel Function

function addition(zahl1, zahl2) {
    let ergebnis = zahl1 + zahl2;
    return ergebnis;
}

console.log(addition("Hallo ", "Welt!"));

// Funktion haben die folgendes macht:
// Netto Betrag * 1.19 zusammenrechnen
// und dann den Bruttobetrag mir ausgeben

const Umsatzsteuer = 1.19;
function bruttoRechner(nettobetrag) {
    let brutto = nettobetrag * Umsatzsteuer;
    return brutto;
}

console.log(bruttoRechner(200));

// If-Abfrage
var zwanzig = 20;
var zehn = 10;
if(zwanzig > zehn) {
    console.log("Die Zwanzig ist groesser als die 10");
}

if(zehn > zwanzig) {
    console.log("Zehn ist groesser");
}

var beschreibung = "Hallo";
if(beschreibung = "Hallo") {
    console.log("Na du?");
}

// If-else Abfrage
if(zehn > zwanzig) {
    console.log("If-case");
    document.write("If-Case");
} else {
    console.log("Else-case");
    document.write("Else-case");
}

// If, else-if, else

var fuenfzig = 50;
var dreiszig = 30;
var siebzig = 70;

if(fuenfzig > siebzig) {
    document.write("If-Case");
} else if(siebzig > fuenfzig) {
    document.write("Else-if Case");
} else {
    document.write("Else-CASE");
}

// Ternary Operator
var a = 5;
(a == 5) ? document.write("<br> 5") : document.write("Falsch")

// Beispiel:

var fahrzeug = "Boot";

if(fahrzeug == "Auto") {
    alert("Fahr!");
} else if(fahrzeug == "Boot") {
    alert("Schwimm!");
} else {
    alert("Mach was du willst!");
}

document.write("<br><br>");

switch(fahrzeug) {
    case "Auto":
        document.write("Fahr!");
        break;
    case "Boot":
        document.write("Schwimm!");
        break;
    case "Flugzeug":
        document.write("Flieg!");
        break;
    default:
        document.write("Geh zu Fuß!");
        break;
}

/*
    If-Abfrage
    Ist Zahl 100 groesser als 200?
    => Wenn ja, Ausgabe: "Zahl ist groesser"
    => Wenn nein, Ausgabe: "Ist kleiner"
    
    Switch-Case
    Variable erstellen mit dem Wert "300"
    case 1 (100): "Zahl ist 100"
    case 2 (200): "Zahl ist 200"
    case 3 (300): "Zahl ist 300"
*/

document.write("<br><br>")

// For-Schleife
for(var i = 0; i <= 10; i++) {
    document.write("i: " + i + "<br>");
}

// While-Schleife
document.write("<br>");
var i = 0;

while(i <= 10) {
    document.write("i: " + i + "<br>");
    i++;
}

// Do-While
document.write("<br>");
i = 0;
do {
    document.write("i: " + i + "<br>");
    i++;
} while(i <= 10);

// If-Abfrage machen mit Logischen Operatoren
const Nummer = 10;
if(Nummer == 5 || Nummer == 10 || Nummer == 15) {
    // Dann mach ...
    document.write("Nummer: " + Nummer + "<br>");
    document.write(typeof(Nummer));
}