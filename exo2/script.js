"use strict"; // Mode strict (vu dans le slide 52)

// F1 : tableau d'étudiants (chaines de caractères)
function F1() {
    // Déclaration d'un tableau de chaines avec const (vu dans les slides 39 et 52)
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Boucle for..of pour parcourir le tableau (vu dans le slide 45)
    for (const etudiant of etudiants) {
        console.log(etudiant); // Affichage avec console.log (slide 34)
    }
}

// F2 : un objet Etudiant
function F2() {
    // Déclaration d'un objet avec ses propriétés nom, prenom, age (vu dans le slide 40)
    const etudiant = { nom: "John", prenom: "DOE", age: 30 };

    console.log(etudiant); // Affiche l'objet dans la console (slides 34 et 40)
}

// F3 : tableau d'objets Etudiants
function F3() {
    // Tableau d'objets (vu dans le slide 41)
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    
    for (const etudiant of etudiants) {
        // Accès aux propriétés d'un objet avec le point (slide 40)
        // et affichage formaté avec les backticks ${...} (vu dans le slide 38)
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
    }
}
