<?php
echo " Omar <br>";



class Personne // le nom de la classe en php commence par une majuscule et il n'y a pas de () car c'est un objet
// class = objet
{
	// on utilise des variables hors fonctions lorsque l'on veut les utiliser hors de cette fonction
	// pour créer une variable globale, on met this. this =  la_class_nommée
	public $nom="";// on met des attribut dans les variables
	public $prenom="";
	public $poste="";
		
		function __construct($nom,$prenom)// on crée une "fonction construct"
			{
			$this->nom = $nom;
			$this->prenom = $prenom;
			}
		
		public function emploi($sonEmploi)// la variable $sonEmploi sera définie lorsqu'elle aura une valeur
			{	$this->poste = $sonEmploi;

			}

}
	//********* POUR UTILISER UNE CLASSE, ON VA CREER UNE INSTANCE*********************//
		// la classe créée va avoir des valeurs
		
		$Omar = new Personne("Hamzi","Omar");// on crée une variable avec valeur "new" + le nom_de_la_classe
		$Omar-> prenom = "Omar";// on donne une valeur à la variable $prenom
		$Omar-> nom = "Hamzi";
		// Dès qu'on fait un "new" , on lance la fonction "construct"

		echo $Omar->nom;
		
		$Syvestre = new Personne("Sylvestre","Mike");
		echo $Sylvestre->prenom;

		 $Omar->emploi("Google");
		 
		 echo $Omar->poste;


?>


