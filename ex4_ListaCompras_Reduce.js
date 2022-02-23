//um array de objetos
const lista = [
    {
        nome:'sabao em pó',
        preco: 30
    },
    {
        nome:'cereal',
        preco:5
    },
    {
        nome:'toalha',
        preco:40
    },
];
const saldoDisponivel = 100;
//será o initialValue

function calculaSaldo (saldoDisponivel,lista){//initialValue e o array
    return lista.reduce(function(prev,current,index){//prim uma callback function
        console.log('rodada', index +1)
        console.log({prev})
        console.log({current})
        return prev - current.preco//como não queremos o bjt inteiro, somente o preço
    },saldoDisponivel)//segun um initialValue para o acumulador (anterior, prev)
}

console.log(calculaSaldo(saldoDisponivel,lista))