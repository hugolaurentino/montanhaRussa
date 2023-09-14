const idade = 18;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = false;

console.log(`
${idade <= 11 || idade > 65 || possuiPatologia || altura < 150 ? 'ACESSO NEGADO' :
        idade >= 12 && idade <= 17 || ehEstudante ? '10 Reais' :
            '20 Reais'
    }
`);