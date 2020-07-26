
               // Rajaa Khayati de la classe 2ème année AP groupe 4 emsi Maarif


var tabPanier;
var totalHt=0; 
function chargerPanier()
{              
    panierLocal = JSON.parse(localStorage.getItem("panierLocalStorage"));           // On récupère  l'objet stocké en local 
    tabPanier = panierLocal.monPanier;                                            // On récupère le panier stocké dans cet objet qu'on stocke ensuite dans tabPanier 
    
    monTableau = document.getElementById("panier");                            //  Récupérer l'élément <table>  ayant  id = "panier" 
    for( var i = 0; i <tabPanier.length ; i++)                                // On parcoure le tableau tabPanier qui stocke les articles du panier 
{
    var ligne = document.createElement("tr") ;                              // Créez un élément de type " tr" (ligne d'un tableau) 
    ligne.id = i +"ligne";                                                  //  Associez à cet élément l'id  ci-dessous 
    var cellule1 = document.createElement("td") ;                          // Créez un élément de type " td" ( cellule d'une ligne) 
    var imgElem = document.createElement("img") ;                             //  Créez un élément de type " img" ( image) 
    imgElem.setAttribute("src","../images/supr.jpg");                         // Associez à l'attribut "src" de cette image la valeur 
    imgElem.className="imgpoubelle";                                         // Associez à l' image la classe de style "imgpoubelle
    imgElem.id= i+"supp";                                                      // Associez à l'image  l'id  ci-dessous 
    imgElem.onclick = function()
    {  
    var  reponse = confirm("voulez vous supprimer cet article ?");
    if(reponse == true)
    {
    var item = this.getAttribute("id");
    var pos = item.substring(0,1,1);
    supprimerDuPanier(pos);
    }
    }
    cellule1.appendChild(imgElem);                                 // Insérez imgElem comme enfant de l'élément cellule1 
    ligne.appendChild(cellule1);                                   // Insérez cellule1 comme enfant de l'élément ligne 
    for(var prop1 in tabPanier[i])                                 // on parcoure le panier 
    {
    var cellule2 = document.createElement("td") ;                   // Créez un élément de type " td"
    cellule2.textContent= tabPanier[i][prop1];                      //  Précisez  le texte de l'élément  cellule2 
    ligne.appendChild(cellule2);                                    // Insérez cellule2 comme enfant de l'élément ligne 
    }
    totalHt = totalHt + tabPanier[i].prixHt;                          // On calcule maintenant le montant HT de la commande 
    monTableau.appendChild(ligne);                                      //  Insérez ligne comme enfant de l'élément  monTableau 
    }
    total = document.createElement("p") ;
    total.id="total";                                                     //  Associez à cet élément l'id "totalht
    total.innerText= "Total :" + totalHt + "Dh";                           //  Précisez  le contenu texte de l'élément  total 
    document.getElementById("montant").appendChild(total);                  //  Insérez total comme enfant de l'élément ayant id="montant" 

 

}

 

function supprimerDuPanier(pos)
    {
    totalHt = totalHt - tabPanier[pos].prixHt;                    // On recalcule la montant HT de la commande 
    var total = document.getElementById("total");                    // Récupérer l'élément ayant  id = " totalht " 
    var monPanier=panierLocal.monPanier;                         // En utilisant la méthode splice, supprimez du tableau "monPanier" l'élément  de position pos 
    monPanier.splice(pos,1);
        var maLigne = document.getElementById(pos+"ligne");         // On récupère la ligne qu'on veut supprimer 
    monTableau.removeChild(maLigne);                             // A l'aide de removeChild, supprimer l'élément "maLigne" de son parent "tableau" 
    total.innerText= "Total :" + totalHt + "Dh";                // Précisez  le  contenu texte de l'élément  total 
    panier.monPanier = tabPanier;                                // On réinitialise le panier 
    localStorage.setItem("panierLocalStorage",JSON.stringify(panier));        // On écrase le panier stocké en local 
    window.location.reload();                                                   // On recharge la page pour que les modifications soient prises en compte 
}