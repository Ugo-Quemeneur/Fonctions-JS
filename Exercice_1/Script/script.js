// document.write("Le produit de 3 x 8 est égal à " + produit(3, 8) + "." + "\n");

// function produit(x, y) {
//     let res = x*y;
//     return res;
// }

produit(4, 8);

function produit(x, y) {
    document.write("Le produit de " + x + " x " + y + " est égal à " + x*y + "." + "\n");
}

function afficheImg(image) {
    document.write('<img src="' + image +'" alt ="papillon"></img>');
}

afficheImg("papillon.jpg");