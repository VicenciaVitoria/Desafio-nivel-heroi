nomeHeroi = "Vasco";
XP = 5001;
nivel = "Nulo";

if (XP <= 1000){
    nivel = "Ferro"
} else if (XP  >1000 && XP <= 2000){
    nivel = "Bronze"
} else if (XP > 2000 && XP <= 5000){
    nivel = "Prata"
} else if (XP > 5000 && XP <= 6000){
    nivel = "Ouro"
}else if (XP > 6000 && XP <= 8000){
    nivel = "Platina Diamante"
} else if (XP > 8000 && XP <= 9000){
    nivel = "Ascendente"
} else if (XP > 9000 && XP <= 10000){
    nivel = "Imortal"
}else {
    nivel = "Radiante"
}

console.log ("O nivel do Heroi " + nomeHeroi + " é " + nivel)