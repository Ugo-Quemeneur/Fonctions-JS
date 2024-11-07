function Multiples() {
    let n = prompt("Entrez la valeur de N");
    let x = prompt("Entrez la valeur de X");
    let i = 0;
    let msg = "";

    while (i < n) {
        i++;
        msg += i + " x " + x + " = " + (i*x) + "\n";
    }

    alert(msg);
}

function Somme_et_moyenne() {
    let entier;
    let somme = parseInt(0);
    let moyenne = parseFloat(0);
    let j = 0

    do {
        entier = parseInt(prompt("Entrez un entier :"));
        somme += entier;
        j++
    }
    while (entier != 0);

    moyenne = somme / (j-1)
    alert("moyenne : " + moyenne + ", " + "somme : " + somme);
}

function Recherche_du_nombre_de_voyelles() {
    let myVar = prompt("saisir un mot : ");
    let nbVoyelles = 0;

    for (let p = 0; p < myVar.length; p++) {
        console.log(myVar.substr(p,1));
        if (myVar.substr(p,1) == "a" ||myVar.substr(p,1) == "e"
        || myVar.substr(p,1) == "i" || myVar.substr(p,1) == "o" 
        || myVar.substr(p,1) == "u" || myVar.substr(p,1) == "y"
        || myVar.substr(p,1) == "A" || myVar.substr(p,1) == "E"
        || myVar.substr(p,1) == "I" || myVar.substr(p,1) == "O"
        || myVar.substr(p,1) == "U" || myVar.substr(p,1) == "Y") {
            nbVoyelles++;
        }
    }
    console.log(nbVoyelles);
}

console.log("1- Multiples")
console.log("2- Somme et moyenne")
console.log("3- Recherche du nombre de voyelles")
console.log("4- Recherche du nombre des caractères suivants")
console.log("Entrez votre option :")

