//string
let nome: string = 'João'
console.log(nome)

//numbers 
let idade: number = 24
idade = 24.9
console.log(idade)

//boolean
let hobbies:boolean = true
console.log(hobbies)
// hobbies = 2

//tipos explicitos
let minhaIdade: number
minhaIdade = 25
console.log(typeof minhaIdade)

//array

let atividades: any[] = ["Cozinhar", "Jogar"]
console.log(atividades[0])
console.log(typeof atividades)

atividades = [100, 200, 300]
console.log(atividades)

//tuplas 
let endereço: [string, number] = ["Av. das Dores", 1260]
console.log(endereço) 

//enums

enum Cor {
    Azul, // 0
    Amarelo, // 1
    Vermelho // 2
}

let corPrimaria: Cor = Cor.Azul
console.log(corPrimaria)
console.log(typeof Cor)
console.log(typeof corPrimaria)

interface Humano {
    nome: string
    idade?: number // colocamos o ? quando é um parâmetro opicional
    [prop: string]: any // utilizamos essa sintaxe quando não sabemos o nome do patrametro nem o tipo
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa:Humano){
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}
//usando Classes 
// class Cliente implements Humano {
//     name: string = ''
//     ultimaCompra: Date = new Date
//     saudar(sobrenome: string): void {
//         console.log('Olá, meu nome é ' + this.name + '' sobrenome)
//     }
// }

// const meuCliente = new Cliente()
// meuCliente.nome = 'Han'
// saudarComOla(meuCliente)
// meuCliente.saudar('Solo'
// console.log(meuCliente.ultimaCompra)

// saudarComOla(pessoa)
// mudarNome(pessoa)
// saudarComOla(pessoa)
// // saudar({nome: 'Jonas', idade:27, altura: 1.80})
// pessoa.saudar("Relampago Marquinhos")

//Interface função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3,10))
console.log(Math.pow(3,10))
console.log(3 ** 10)