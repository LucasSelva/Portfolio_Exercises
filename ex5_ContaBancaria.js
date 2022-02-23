class contaBancaria {//essa é a mais abstrata
    constructor (agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }//sempre que um valor for ter uma get e/ou set terá _antes da prorpiedade (_saldo) que vai ser manipulada. A função terá o nome sem (saldo)
    get saldo(){
        return this._saldo
    }
    set saldo(valor){
        this._saldo = valor
    }

    sacar(valor){
        if (valor > this._saldo){
            return 'Operação negada: saldo insuficiente'
        }
        this._saldo = this._saldo - valor

        return this._saldo
    }
    depositar(valor){
        this._saldo = this.saldo + valor

        return this._saldo
    }
}
class contaCorrente extends contaBancaria{//a classe filha replica tudo, exceto o que for definido como diferente.
    constructor (agencia,numero,cartaoCredito){
        super(agencia,numero)//todos os valores dessas propriedade serao pratilhadas com a classe pai
        this.tipo = 'Corrente'
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito (valor){
        this._cartaoCredito = valor
    }
}
class contaPoupanca extends contaBancaria{
    constructor (agencia,numero){
        super(agencia,numero)
        this.tipo = 'Poupança'
    }
}
class contaUniversitaria extends contaBancaria{
    constructor(agencia,numero){
        super(agencia,numero)
        this.tipo = 'Universitária'
    }
    sacar(valor){//esse novo sacar vai sobrescrever o anterior da classe contabancaria, o que incluseive permitirá sacar alame do saldo, deixando valores negativos (isso deve ser corrigido)
        if (valor > 500){
            return 'Operação negada: saque acima do limite'
        }
        this._saldo = this._saldo - valor
        return this._saldo
    }
}
//continua com o teste na DOM pelo chrome