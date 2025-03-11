"use strict";
// tipos primitivos
let string = "Sou uma String";
let number = 12;
let boolean = true;
//null e undefined
let nulo = null;
let indefinido = undefined;
// any, void
function retornaNada() {
    console.log("Não to retornando nada!");
}
retornaNada();
//objeto
let aluno1 = { nome: "Felipe", matricula: 23023921, aprovado: true };
let aluno2 = { nome: "João", matricula: 24938420, aprovado: false };
let aluno3 = { nome: "Ana", matricula: 22094782, aprovado: false };
let aluno4 = { nome: "Lívia", matricula: 23390864, aprovado: true };
//funcao com parametros (com o tipo explicito)
exibirAluno(aluno1);
function exibirAluno(aluno) {
    console.log(aluno);
}
//Arrays
let listaDeAlunos = [];
listaDeAlunos.push(aluno1);
listaDeAlunos.push(aluno2);
listaDeAlunos.push(aluno3);
listaDeAlunos.push(aluno4);
exibirListaDeAlunos(listaDeAlunos);
function exibirListaDeAlunos(alunos) {
    console.log(alunos);
}
let funcionarios = [1, "Antonio"];
funcionarios.push(2, "Leonardo");
funcionarios.push(3, "Geromel");
funcionarios.push(4, "Marina");
//Datas
let aniversario = new Date(Date.now());
console.log(aniversario.toString());
console.log();
// funcoes multiTipos
function funcaoMultiTipo(elemento) {
    console.log(elemento);
    console.log("Tipo do elemento é: " + typeof elemento);
}
funcaoMultiTipo(12345);
funcaoMultiTipo("sou uma string");
