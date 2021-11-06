console.log("***"); //check of node loopt

//Deel 1
const paintWalls1 = () => { //function zonder argument
    console.log("the wall has been painted red");
}
paintWalls1();

//Deel 2
const paintWalls = (huidigeKleur) => { //functie met 1 argument
    if (huidigeKleur === "groen") {
        return "the walls have been painted green";
    }
    else {
        return "pannekoek";
    }
};
console.log(paintWalls("groen"));
console.log(paintWalls("purple"));

// Deel 3
const paintWalls3 = (huidigeKleur, WindRichting) => { // functie met 2 argumenten
    return ("The " + huidigeKleur + " wall has been painted " + WindRichting);
};
console.log(paintWalls3("north", "pimpelpaars"));
//volgorde argumenten is belangrijk bij het aanroepen - zorg dat het hetzelfde is gedefineerd.
//nu heb ik de waarde bij huidigeKluer north gemaakt, en dat kan als juiste waarde worden gezien.        