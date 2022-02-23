const alunos = [
{
    nome:'Joao',
    nota:3,
    turma:'1b',
},
{
    nome:'Luxas',
    nota:9,
    turma:'1b',
},
{
    nome:'Clara',
    nota:10,
    turma:'2c',
},
]
function alunosAprovados (nomes,media){
    let aprovados = [];
    for(let i = 0; i<nomes.length;i++){
        const {nota,nome} = nomes[i];

        if(nota>=media){
            aprovados.push(nome);
        }
        //if(nomes[i].nota >=media){
           // aprovados.push(nomes[i].nome);
        //}
    }
    return aprovados;
}
console.log(alunosAprovados(alunos,5))
//(array com nomes e notas, valor da média)