//Boletim escolar

var nota1, nota2, nota3, nota4;

nota1 = 8;
nota2 = 7.2;
nota3 = 8.1;
nota4 = 4;

const media = (nota1 + nota2 + nota3 + nota4) / 4;

if(media > 7){
    console.log(`Média ${media.toFixed(2)}: Aprovado!`);
}else{
    console.log(`Média ${media.toFixed(2)}: Reprovado!`);
}