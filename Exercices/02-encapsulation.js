/*
Exercice 2 : Encapsulation

Objectif : Appliquer le concept d'encapsulation.
Consignes

    Modifiez la classe Voiture pour que ses attributs soient privés.
    Ajoutez des getters et des setters pour chaques attributs.
    Créer une instance de Voiture et modifiez en la couleur.
*/

'use strict';
class Voiture {
  #marque;
  #modele;
  #annee;
  #couleur;
  constructor() {}

  setMarque(marque) {
    this.#marque = marque;
  }

  setModele(modele) {
    this.#modele = modele;
  }

  setAnnee(annee) {
    this.#annee = annee;
  }

  setCouleur(couleur) {
    this.#couleur = couleur;
  }

  afficherDetails() {
    console.log(this.#marque, this.#modele, this.#annee, this.#couleur);
  }
}

const voiture1 = new Voiture();

voiture1.setMarque('Renault');
voiture1.setModele('Twingo');
voiture1.setAnnee(2019);
voiture1.setCouleur('Blanche');
voiture1.afficherDetails();
