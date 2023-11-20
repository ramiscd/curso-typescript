"use strict";
//string
let nome = 'João';
console.log(nome);
//numbers 
let idade = 24;
idade = 24.9;
console.log(idade);
//boolean
let hobbies = true;
console.log(hobbies);
// hobbies = 2
//tipos explicitos
let minhaIdade;
minhaIdade = 25;
console.log(typeof minhaIdade);
//array
let atividades = ["Cozinhar", "Jogar"];
console.log(atividades[0]);
console.log(typeof atividades);
atividades = [100, 200, 300];
console.log(atividades);
//tuplas 
let endereço = ["Av. das Dores", 1260];
console.log(endereço);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Vermelho"] = 2] = "Vermelho"; // 2
})(Cor || (Cor = {}));
let corPrimaria = Cor.Azul;
console.log(corPrimaria);
console.log(typeof Cor);
console.log(typeof corPrimaria);
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudar({nome: 'Jonas', idade:27, altura: 1.80})
pessoa.saudar("Relampago Marquinhos");
