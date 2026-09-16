let score = {
  victoires: 0,
  defaites: 0,
  egalites: 0
};

const choixPossibles = ["Pierre", "Feuille", "Ciseaux"];

function actualiserAffichage() {
  document.getElementById("compte-victoires").textContent = score.victoires;
  document.getElementById("compte-defaites").textContent = score.defaites;
  document.getElementById("compte-egalites").textContent = score.egalites;

  if (score.victoires > 1) {
    document.getElementById("label-victoires").textContent = "Victoires";
  } else {
    document.getElementById("label-victoires").textContent = "Victoire";
  }
  
  if (score.defaites > 1) {
    document.getElementById("label-defaites").textContent = "Défaites";
  } else {
    document.getElementById("label-defaites").textContent = "Défaite";
  }

  if (score.egalites > 1) {
    document.getElementById("label-egalites").textContent = "Égalités";
  } else {
    document.getElementById("label-egalites").textContent = "Égalité";
  }
}

function jouer(choixJoueur) {
  const choixOrdi = choixPossibles[Math.floor(Math.random() * 3)];
  document.getElementById("choix-ordi").textContent = "L'ordinateur a choisi : " + choixOrdi;

  if (choixJoueur === choixOrdi) {
    score.egalites++;
  } else if (
    (choixJoueur === "Pierre" && choixOrdi === "Ciseaux") ||
    (choixJoueur === "Feuille" && choixOrdi === "Pierre") ||
    (choixJoueur === "Ciseaux" && choixOrdi === "Feuille")
  ) {
    score.victoires++;
  } else {
    score.defaites++;
  }

  actualiserAffichage();
}

function reset() {
  score.victoires = 0;
  score.defaites = 0;
  score.egalites = 0;
  actualiserAffichage();
}