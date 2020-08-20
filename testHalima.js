let pyramide = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
function generatePyramid() {

    let output = '';
    // on déclare la variable output comme vide

    for (let count = 1; count <= pyramide; count++) {
    //on incrémente le compteur du nombre d'étages voulus par l'utilisateur

        for (let etage = 1; etage <= count; etage++) {

        	
    //tant qu'on a pas atteint le nombre d'étages de count, on dessine un étage

            output +=  '#';

        }
        console.log(output);
        output = '';
    //insertion d'un espace
    }
}


generatePyramid(pyramide+ "count");




