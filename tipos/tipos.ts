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
}

function saudar(pessoa: Humano){
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa:Humano){
    pessoa.nome = 'Joana'
}

const pessoa = {
    nome: 'João',
    idade: 27
}

saudar(pessoa)
mudarNome(pessoa)
saudar(pessoa)