let score = {
  victoires: 0,
  defaites: 0,
  egalites: 0
};

const choixPossibles = ["Pierre", "Feuille", "Ciseaux"];

function jouer(choixJoueur) {
  const choixOrdi = choixPossibles[Math.floor(Math.random() * 3)];

  if (choixJoueur === choixOrdi) {
    score.egalites++;
    document.getElementById("compte-egalites").textContent = score.egalites;
  } else if (
    (choixJoueur === "Pierre" && choixOrdi === "Ciseaux") ||
    (choixJoueur === "Feuille" && choixOrdi === "Pierre") ||
    (choixJoueur === "Ciseaux" && choixOrdi === "Feuille")
  ) {
    score.victoires++;
    document.getElementById("compte-victoires").textContent = score.victoires;
  } else {
    score.defaites++;
    document.getElementById("compte-defaites").textContent = score.defaites;
  }
}
function reset() {
    score.victoires = 0;
    score.defaites = 0;
    score.egalites = 0;
    document.getElementById("compte-victoires").textContent = 0;
    document.getElementById("compte-defaites").textContent = 0;
    document.getElementById("compte-egalites").textContent = 0;
}