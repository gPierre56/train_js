villes = [
  "nantes", "paris", "saint-nazaire", "angers", "le mans"
];

villes.forEach(function (element) {
  console.log(element);
});
lettreADansToutesLesVilles = villes.every(function (element) {
  return element.includes("a");
});
console.log(lettreADansToutesLesVilles);
auMoinsUneVilleAvecUnTiret = villes.some(function (element) {
  return element.includes("-");
});
console.log(auMoinsUneVilleAvecUnTiret);
villesSansTiretNiEspace = villes.filter(function (element) {
  return !element.includes("-") && !element.includes(" ");
});
console.log(villesSansTiretNiEspace);
villesMajusculeSeTerminantParS = villes.filter(function (element) {
  return element.endsWith("s");
}).map(element => element.toUpperCase());

villesMajusculeSeTerminantParS.forEach(function (element) {
  console.log(element);
});
