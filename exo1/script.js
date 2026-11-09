"use strict"; // Mode strict : signale les variables non déclarées (vu dans le slide 52)

// Fonction appelée par le bouton "Nom" (fonction déclarée avec function : slide 46)
function F1() {
    let nom = "John"; // Variable de type String, déclarée avec let (vu dans les slides 38 et 52)
    console.log(nom); // Affichage dans la console (vu dans le slide 34)
}


function F2() {
    let prenom = "Doe"; 
    console.log(prenom); 
}


function F3() {
    let nom = "John"; 
    let prenom = "Doe"; 
    // Affichage élaboré + (vu dans le slide 38)
    console.log(nom + "-" + prenom);
}


function F4() {
    let age = 30; // Type number : entier (vu dans le slide 38)
    console.log(age); 
}


function F5() {
    let note = 15; 
    console.log(note); 
}


function F6() {
    const pi = 3.14; // Constante avec const, type number réel (vu dans les slides 38 et 52)
    console.log(pi); 
}
