"use strict"; // Mode strict (vu dans le slide 52)

// Données Students : tableau d'objets (vu dans le slide 41), déclaré avec const (slide 52)
// Chaque objet : id, nom, prenom, moyenne, att
const students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", moyenne: 14, att: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", moyenne: 7, att: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", moyenne: 13, att: 3 }
];

// Fonction B (F2) : prend UN seul paramètre (la moyenne) et retourne un booléen
// Fonction avec paramètre et retour (vu dans le slide 46)
function F2(moyenne) {
    // Opérateur de comparaison >= qui donne true ou false (vu dans le slide 42)
    return moyenne >= 10;
}

// Fonction A (F1) : appelée par le bouton, elle appelle la fonction B
function F1() {
    // Boucle for..of pour parcourir le tableau d'objets (vu dans le slide 45)
    for (const student of students) {
        // Appel de la fonction B avec la moyenne de l'étudiant (slide 46)
        const decision = F2(student.moyenne);

        // Condition if...else (vu dans le slide 43)
        if (decision) {
            // Affichage formaté avec backticks (slide 38) dans la console (slide 34)
            console.log(`${student.id}: ADMIS`);
        } else {
            console.log(`${student.id}: AJOURNÉ`);
        }
    }
}
