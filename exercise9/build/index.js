"use strict";
// Uma das definições de seres vivos implica em identificar se ele possui células ou não.
//Hoje em dia, sabe-se que as características deles ficam salvas dentro de uma molécula,
// um tanto quanto grande, chamada de DNA (Ácido Desoxirribonucleico).
//Uma das tarefas mais importantes para a sobrevivência das células é a transcrição do RNA
//(Ácido Ribonucleico) a partir de um DNA. Este processo consiste em identificar as bases
//nitrogenadas que formam o DNA, em questão.
//Todas as moléculas de DNA podem ser representadas como uma sequência de bases nitrogenadas
//que podem ser: a A (adenina), T (timina), G (guanina) ou C (citosina). Abaixo, há um exemplo disto
//ATT GCT GCG CAT TAA CGA CGC GTA
//Para se formar o RNA, devemos realizar a troca das bases nitrogenadas,
//seguindo a regra: A (adenina) vira U (uracila - específica do RNA); T (timina) vira Adenina (A),
// C (citosina) vira G(guanina); e G (guanina) vira C (citosina).
// O RNA transcrito a partir do exemplo de DNA acima é
//UAA CGA CGC GUA AUU GCU GCG CAU
const transcriptionRna = (dna) => {
    let response = "";
    for (let base of dna) {
        switch (base) {
            case "A":
                response += "U";
                break;
            case "T":
                response += "A";
                break;
            case "C":
                response += "G";
                break;
            case "G":
                response += "C";
                break;
            case " ":
                response += " ";
        }
    }
    return response;
};
const dnaTest = "ATTGCTGCGCATTAACGACGCGTA";
console.log(transcriptionRna(dnaTest));
