/*
Exercice 1 : Classes et Objets

Objectif : Comprendre la création de classes et d'objets.
Consignes

    Créez une classe Voiture avec les attributs marque, modele, annee, et couleur.
    Ajoutez une méthode afficherDetails permettant d'afficher les caractéristiques de la Voiture.
    Créez une instance de cette classe et initialisez ses attributs.
    Affichez les détails de la voiture.
*/

class Voiture {
    constructor(marque, modele, annee, couleur) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }

    afficherDetails() {
        console.log(this.marque, this.modele, this.annee, this.couleur);
    }

}


const voiture1 = new Voiture ('Renault', 'Twingo', 2019, 'Blanche');

voiture1.afficherDetails();