// Exo1
/*
    mkdir Muhammad_Nazam_test_javascript && touch index.js index.html index.css
*/

// Exo2
let maBoolean = true;

// Exo3

let monArray = [];

// Exo4 

let monObjet = {};

// Exo5 

let monString = '';

// Exo6 

let monInt = 5;

// Exo 7

let personne = {
    nom: 'Nazam',
    saluer() {
        return `Bonjour ${this.nom}`;
    }
}

// Exo 8 

let maFunction = (nom, age) => {
    return `${nom} a ${age} ans`;
}

// Exo 9

if (monInt < 8) {
    console.log(`${monInt} est plus petit qu 8`);
}

// Exo 10

let i = 0;

while (i < 9) {
    i++;
}

// Exo 11

let date = new Date().toLocaleDateString();

// Exo 12

let maj = (str) => {
    console.log(str.toUpperCase());
}

// Exo 13

let maj2 = (str) => {
    console.log(str.charAt(0).toUpperCase() + str.substr(1, str.length - 2).toLowerCase() + str.charAt(str.length - 1).toUpperCase());
}

// Exo 14

let taille = (str) => {
    alert(str.length);
}

// Exo 15

let random = () => {
    alert(Math.ceil(Math.random() * 100));
}

// Exo 16

let random2 = (min, max) => {
    alert(Math.round(Math.random() * max + min));
}

// Exo 17

let typeVar = (valeur) => {
    switch (typeof valeur) {
        case typeof monInt:
            console.log('Votre valeur est de type Integer');
            break;
        case typeof monObjet:
            console.log('Votre valeur est de type Object');
            break;
        case typeof monString:
            console.log('Votre valeur est de type String');
            break;
        case typeof maBoolean:
            console.log('Votre valeur est de type Boolean');
            break;
        case typeof monArray:
            console.log('Votre valeur est de type Array');
            break;
        default:
            console.log('Votre valeur ne correspond à aucun type déclaré');
    }
}

// Exo 18

let humain = {
    nom: '',
    age: 0,
    modeling(nom, age) {
        this.nom = nom;
        this.age = age,
            alert(`Bonjour ${this.nom} tu as ${this.age} ans`);
    }
}

// Exo 19

let ajouteur = {
    addKey(key, valeur) {
        humain[key] = valeur;
        console.log(humain);
    }
}

// Exo 20

let carre = {
    size: 0,
    borderaspect: '',
    epaisseur: 0,
    couleur: '',
    ajouter(taille, aspect, epaisseur, couleur) {
        let correct = true;
        if (isNaN(taille) && isNaN(epaisseur)) {
            correct = false;
            alert('Veuillez entrez un Integer pour l\'épaisseur et la taille');
        } else {
            this.size = taille;
            this.epaisseur = epaisseur;
        }
        if (aspect != 'dotted' && aspect != 'solide') {
            correct = false;
            alert('Veuillez entrez une valeur correcte pour l\'aspect');
        } else {
            this.borderaspect = aspect;
        }
        if (couleur != 'green' && couleur != 'red' && couleur != 'blue') {
            correct = false;
            alert('Veuillez entrez une valeur correcte pour la couleur');
        } else {
            this.couleur = couleur;
        }
        if (correct) {
            alert(`votre carré a pour size : ${this.size} px, borderaspect : ${this.borderaspect}, a pour épaisseur : ${this.epaisseur}, a pour couleur ${this.couleur} `);
        }
    }
}

// Exo 22

let section = document.getElementsByTagName('section')[0];
section.setAttribute('id', 'management');
let h1 = document.getElementsByTagName('h1')[0];

h1.innerText = 'Bienvenue';

// Exo 23

let sousTitre = document.createElement('h3');
sousTitre.innerText = 'Connexion : ';
let inputNom = document.createElement('input');
let inputMdp = document.createElement('input');
let inputMdp2 = document.createElement('input');
let button = document.createElement('button');

let paraNom = document.createElement('p');
let paraMdp = document.createElement('p');
let paraMdp2 = document.createElement('p');

paraNom.innerText = 'Nom';
paraMdp.innerText = 'Mot de passe';
paraMdp2.innerText = 'Retapez Mot de passe';
button.innerHTML = 'Connexion';

inputMdp.setAttribute('type', 'password');
inputMdp.setAttribute('type', 'password');

section.appendChild(sousTitre);

section.appendChild(paraNom);
section.appendChild(inputNom);

section.appendChild(paraMdp);
section.appendChild(inputMdp);

section.appendChild(paraMdp2);
section.appendChild(inputMdp2);

section.appendChild(button);

let verifie = () => {
    let correct = true;
    if (inputMdp.value != inputMdp2.value || inputNom.value != '') {
        correct = false;
        alert('Veuillez entrez le même mot de passe dans les deux champs');
    } else if (inputNom.value.length > 5) {
        alert('Veuillez entrez 5 caractères maximum');
    }
}