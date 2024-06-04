/*
Exercice 4 : Polymorphisme

Objectif : Utiliser le polymorphisme.
Consignes

    Créez une classe Animal avec une méthode faireDuBruit.
    Créez des classes Chien et Chat qui héritent de Animal et redéfinissent la méthode faireDuBruit.
    Utilisez le polymorphisme pour afficher que Le chien aboie et que Le chat miaule 
    lors de l'appel de la méthode faireDuBruit.
*/

'use strict';

class Animal{
    constructor(){}

    faireDuBruit(){
        console.log('Je fais du bruit');
    }
}

class Chien extends Animal{
    constructor(){
        super();
    }    
    faireDuBruit(){
        console.log('Le chien aboie');
    }
}

class Chat extends Animal{
    constructor(){
        super();
    }
    faireDuBruit(){
        console.log('Le chat miaule');
    }
}

const chien = new Chien();
const chat = new Chat();
chien.faireDuBruit();
chat.faireDuBruit();