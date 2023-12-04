// Calculadora de partidas Rankeadas
var xpHeroi = parseInt(prompt("Digite o ranking do herói:"));

// Utilizando estrutura de decisão para determinar o nível
function calcularRanking (vitoria, Derrota){
        let ranking = "" - Derrota ;
        console.log(vitoria + " " + ranking + "Derrota" ) 
}

if (Vitoria < 10) {
    nivel = "Ferro";
} else if (vitoria >= 11 && vitoria <= 20) {
    nivel = "Bronze";
} else if (vitoria >= 21 && vitoria <= 50) {
    nivel = "Prata";
} else if (vitoria >= 51 && vitoria <= 80) {
    nivel = "Ouro";
} else if (vitoria >= 81 && vitoria <= 90) {
    nivel = "Diamante";
} else if (vitoria >= 91 && vitoria <= 100) {
    nivel = "Lendário";
} else if (vitoria >= 101 ) {
    nivel = "Imortal";
} 

// Exibindo a mensagem
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${vitoria}.`);


