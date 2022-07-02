
function frage1(){
    var eingabe = prompt("Wie viele Space-Shuttle waren für die NASA im Weltraum?");
    var antwort = "5";
    var ergebnis;

    eingabe == antwort ? ergebnis = "Richtig" : ergebnis = "Leider falsch";
    document.getElementById("ergebnis1").innerHTML = ergebnis;
    document.getElementById("raten1").innerHTML = "";
    document.getElementById("richtigeAntwort1").innerHTML = "5 Shuttles, die Columbia, Challenger, Discovery, Antlantis und Endeavour.";
}

function frage2(){
    var eingabe = prompt("Wie viele bemannte Mondlandungen gab es?");
    var antwort = "6";
    var ergebnis;

    eingabe == antwort ? ergebnis = "Richtig" : ergebnis = "Leider falsch";
    document.getElementById("ergebnis2").innerHTML = ergebnis;
    document.getElementById("raten2").innerHTML = "";
    document.getElementById("richtigeAntwort2").innerHTML = "Sechs mal landeten amerikanische Astronauten auf dem Mond.";
}

function frage3(){
    var eingabe = prompt("Wie viele Planeten hat unser Sonnensystem?");
    var antwort = "8";
    var ergebnis;

    eingabe == antwort ? ergebnis = "Richtig" : ergebnis = "Leider falsch";
    document.getElementById("ergebnis3").innerHTML = ergebnis;
    document.getElementById("raten3").innerHTML = "";
    document.getElementById("richtigeAntwort3").innerHTML = "Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun. Pluto gilt nicht als Planet";
}

function frage4(){
    var eingabe = parseInt(prompt("Wie weit schätzen Sie die Entfernung zum Mond? (in km)"));
    var antwort = "10";
    var ergebnis;

    if (eingabe < antwort){
        ergebnis = "zu nah geschätzt";
    } else if (eingabe > antwort){
        ergebnis = "zu weit geschätzt";
    } else if (eingabe == antwort){
        ergebnis = "richtig!";
    } else {
        ergebnis = "Sie haben keine Zahl eingegeben?";
    }
    document.getElementById("ergebnis4").innerHTML = ergebnis;
    document.getElementById("raten4").innerHTML = "";
    document.getElementById("richtigeAntwort4").innerHTML = "Der Mond ist 356.410 km von der Erde entfernt."
}
