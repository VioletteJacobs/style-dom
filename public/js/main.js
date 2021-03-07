

// ## Partie 1 
// - Créez une balise h1 avec comme text "Coding School 15"

// - Créez une variable qui recoit une valeur d'un prompt avec une couleur (en anglais)

// couleur


let couleur = prompt ("Donnez moi une couleur (en anglais)")

let h1 = document.querySelector("h1")
h1.style.color = couleur

// color (h1) {
//     h1.style.color == couleur
// }




// - Changez la couleur du h1 grace a la valeur que vous avez entré dans le prompt

// # Partie 2
// - Créez un prompt qui demande si vous voulez changer le la couleur de background du h1
let question = prompt ("Voulez-vous changer la couleur du background h1?")
if (question == "oui"){
    let couler = prompt ("Quelle couleur?")
    h1.style.background = couler 

}else{
    alert ("ok, cool! ")
}

let par = document.getElementsByClassName ("para")
par.style.color == "red" 


// - Si oui, demandez aussi via un prompt en quelle couleur voulez vous changer

//     - Changez la couleur de background du h1 grace a la valeur que vous avez entré dans le prompt

// - Sinon, vous ne changez rien (Bonne nuit ;p)
