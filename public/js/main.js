let Francois = {
    nom: 'Francois',
    panier: ['huile', 'tomate']
};

let Sergio = {
    nom: 'Sergio',
    panier: ['pomme', 'banane']
};

Array.prototype.push.apply(Francois, Sergio);
