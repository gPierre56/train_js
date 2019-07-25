function Personne (nom, prenom, pseudo){

  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;
  this.getNomComplet = function() {
  console.log(this.prenom + " " + this.nom + " " + this.pseudo);
  }
  this.getInitiales = function() {
    return this.prenom.charAt(0) + this.nom.charAt(0);
  }
}

jules = new Personne("Jules", "Mérou", "juju51");
console.log(jules.prenom);
console.log(jules.nom);
console.log(jules.pseudo);
jules.getNomComplet();

afficherPersonne = function(personne) {
  console.log(personne.prenom);
  console.log(personne.nom);
  console.log(personne.pseudo);
  personne.getNomComplet();
}

paul = new Personne("Paul", "Préboit", "popo11");
afficherPersonne(paul);

jules.pseudo = "jules44";
afficherPersonne(jules);
console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);
jules.age = 14;
console.log(jules.age);
console.log(jules.getInitiales());
robert = {
  prenom: "Robert",
  nom: "LEPREFET",
  pseudo: "robert77",
  getNomComplet: function() {
    console.log(this.prenom + " " + this.nom + " " + this.pseudo);
  }
};
afficherPersonne(robert);
function Client(nom, prenom, pseudo, numeroClient) {
  Personne.call(this, nom, prenom, pseudo);
  this.numeroClient = numeroClient;
  this.getInfos = function() {
    return "numero : " + this.numeroClient + ", nom : " + this.nom + ", prénom : " + this.prenom;
  };
}

steve = new Client("LUCAS", "Steve", "steve44", "A01");
Personne.call(afficherPersonne(steve));
console.log(steve.numeroClient);
console.log(steve.getInfos());
