pL(mangetesmorts, e);

function pL(phrase, lettreàtrouver) {
    let nbLettre = 0;
    for (i = 0; i < phrase.length; i++) {
        let lettre = phrase.substr(i,1);
        if (lettre == lettreàtrouver) {
            nbLettre++;
        }
    }
    console.log(nbLettre);
}


