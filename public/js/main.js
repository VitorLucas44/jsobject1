let francois = {
    nom: 'Francois',
    panier: ['huile', 'tomate', 'pain']
};

let sergio = {
    nom: 'Sergio',
    panier: ['pomme', 'banane', 'poiree']
};

francois.derober = function() {
    if (sergio.panier.length >= 2) {
    let aliment1 = sergio.panier.shift();
    let aliment2 = sergio.panier.shift();
    this.panier.push(aliment1);
    this.panier.push(aliment2);
    }
}

francois.derober();

console.log(francois)