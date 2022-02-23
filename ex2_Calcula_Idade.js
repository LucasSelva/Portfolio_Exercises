function calculaIdade(anos){
    return`Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}
const pessoa1 = {
    nome: 'Maria',
    idade: 30,
}
const pessoa2 = {
    nome: 'Carlo',
    idade: 17,
}
const pessoa3 = {
    nome: 'Loo',
    idade: 36,
}
const animal = {
    nome: 'Bart',
    idade: 2,
}
console.log(calculaIdade.call(animal,30))
//"chama" os valores equivalentes da const para a função
console.log(calculaIdade.apply(pessoa3,[15]))
//apply deve vir como array[]
//daqui a 30 anos a pessoa3...