/*
Exercice 3 : Héritage

Objectif : Comprendre l'héritage entre classes.
Consignes

    Créez une classe Vehicule avec les attributs marque, modele, et annee.
    Faites en sorte que la classe Voiture hérite de la classe Vehicule et
     possède l'attribut couleur (non présent dans la classe Vehicule).

*/

'use strict';

class Vehicule {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
}

class Voiture extends Vehicule {
    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee);
        this.couleur = couleur;
    }

    afficherDetails() {
        console.log(this.marque, this.modele, this.annee, this.couleur);
    }
}


const voiture1 = new Voiture ('Renault', 'Twingo', 2019, 'Blanche');

voiture1.afficherDetails();