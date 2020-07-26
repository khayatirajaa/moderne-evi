
                // Rajaa Khayati de la classe 2ème année AP groupe 4 emsi Maarif


var monPanier=new Array();

function chargerArticles()
 {var articles=document.getElementById("content");                    // Récupérer l'élément 
 for(var i=0;i<catalogue.length;i++)                           // On parcoure le tableau catalogue qui stocke les articles
 {
	 var article=document.createElement("div");                       //  Créez un élément de type div 
	 article.className="article";                                    //  Associez à l'élément "article" la classe de style "article" 
	 article.id=i+"-article";
	
	 /******affichage de la photo d'article********/
	 var articleImg=document.createElement("img");
	 articleImg.className="img_art";
	 articleImg.setAttribute("src",catalogue[i].image);
	 article.appendChild(articleImg);
	  /**********Affichage du prix de l'article *****************/
	 var articlePrix =document.createElement("div");
	 articlePrix.className="prix_art";
	 articlePrix.innerText=catalogue[i].prix;
	 article.appendChild(articlePrix);
	  /******affichage du nom de l'article******/
	 var articleNom=document.createElement("h2");
	 articleNom.className="nom_art";
	 articleNom.innerText=catalogue[i].nom;
	 article.appendChild(articleNom);
	 /******affichage de la desccription de l'article********/
	 var articleDesc=document.createElement("div"); 
	 articleDesc.className="desc_art";
	 articleDesc.innerText=catalogue[i].desc;
	 article.appendChild(articleDesc);
	
	 /**********Affichage de la zone de commande *****************/
	  
	 var zoneCmd=document.createElement("div");              //Créez un élément  de type div et  associez-lui  la classe de style "cmd_art"
	 zoneCmd.className="cmd_art";
	 var inputCmd=document.createElement("input");          //Créez un élément <input> et associez-lui la classe de style input_art 
	 inputCmd.className="input_art";                         
	 
	 inputCmd.id= i +"-qte";                                  // On associe un id à chaque élément input  
	 
	 inputCmd.type ="number";                                 // l'élément inputCmd est de type number
	 inputCmd.value = 0;                                    // Par défaut la quantité affichée est égale à 0 
	 inputCmd.min = 0 ;
	 inputCmd.max = 5 ;                                       // La quantité doit être comprise entre 0 et 5 
	 zoneCmd.appendChild(inputCmd);                            //Insérez inputCmd comme enfant de l'élément zoneCmd 
	 var bouton=document.createElement("button");             // Créez un élément de type "button" et associez-lui la classe de style " btn_art " 
	 bouton.className="btn_art";
	 bouton.id = i+"-cmd";                                      //On associe un id au bouton 
	 
	 bouton.onclick = function() {                             // Insérez l'élément bouton comme enfant de l'élément zone 
	 var item = this.getAttribute("id");
	 if(item.substring(0.2)>9)                                        //  Insérez  l'élément zoneCmd comme enfant de l'élément article 
	 {var pos=item.substring(0,2);}                                       
	 else{                                                               // Et enfin on insère  "article" comme enfant de  l'élément "articles" 
	 var pos = item.substring(0,1) ;
     }
	 
	 ajouterAuPanier(pos);
	 }

	 zoneCmd.appendChild(bouton);
	 article.appendChild(zoneCmd);
	 articles.appendChild(article);
	 }
     }
 function searchDansPanier(nom)
    {
     for(var i=0;i<monPanier.length;i++)
     {
	 if(monPanier[i].nom==nom)
	 {
		return true;
	 }
	 else
	 return false;
     }
     }
 function ajouterAuPanier(pos){
	 if(searchDansPanier(catalogue[pos].nom))              // A l'aide de searchDansPanier, on vérifie si l'article existe déjà dans le panier 
	 {alert('cet article existe deja dans le panier');}	   // Affichez un message alert pour informer le client que l'article se trouve déja dans le panier  
	 else
		 var ident=pos+"-qte";                            // On récupère l'id de la zone quantité associée à l'article qu'on veut commander 
		 var qte=document.getElementById(ident).value;   // À l'aide de getElementById, récupérez la valeur de la quantité saisie 
	 
	 if(qte==0){alert('choisissez une quantite>0');}     // Vérifiez que la quantité saisie est supérieure à 0 
	 else                                              // On crée un objet pour y stocker le nom, le prix et la quantité de l'article commandé 
	 { var articleCmd={};                              // creation d'un objet vide 
	 articleCmd.nom=catalogue[pos].nom;               // On stocke le nom de l'article qui se trouve à la position pos dans le tableau catalogue.  
	 articleCmd.prix=catalogue[pos].prix;            // On stocke le prix de l'article qui se trouve à la position pos dans le tableau catalogue.  
	 articleCmd.qte=qte;                                      // Stockez la quantité saisie 
	 articleCmd.prixHt=articleCmd.prix*articleCmd.qte;         // On calcule et on stocke le prix Hors Taxe 
	 monPanier.push(articleCmd);                              // à l'aide de la méthode push ajoutez l'objet articleCmd  dans le tableau monPanier 
	 alert('ARTICLE:');                  
	 alert( articleCmd.nom);                                  // à l'aide d'un alert affichez  au  client les informations de l'article commandé 
	 alert('PRIX:');
	  alert( articleCmd.prix );
	  alert('QUANTITE:');
	   alert( articleCmd.qte);
	   alert('TOTAL:');
     alert( articleCmd.prixHt);
	
	 }
 }

 
 function stockerPanier(data) {            
	var panierJSON = {};                              // On crée un objet vide 
	panierJSON.monPanier = data;                    // On met dans cet objet le tableau qu'on veut stocker 
	localStorage.setItem("panierLocalStorage", JSON.stringify(panierJSON));        
	// On stocke en local à l'aide de l'objet localStorage et la méthode 
}

 
 
 
 