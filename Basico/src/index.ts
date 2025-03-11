// tipos primitivos
let string: string = "Sou uma String";
let number: number = 12;
let boolean: boolean = true;

//null e undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// any, void
function retornaNada(): void {
  console.log("Não to retornando nada!");
}

retornaNada();

//type
type Aluno = {
  nome: string;
  matricula: number;
  aprovado: boolean;
};

//objeto
let aluno1: Aluno = { nome: "Felipe", matricula: 23023921, aprovado: true };
let aluno2: Aluno = { nome: "João", matricula: 24938420, aprovado: false };
let aluno3: Aluno = { nome: "Ana", matricula: 22094782, aprovado: false };
let aluno4: Aluno = { nome: "Lívia", matricula: 23390864, aprovado: true };

//funcao com parametros (com o tipo explicito)
exibirAluno(aluno1);
function exibirAluno(aluno: Aluno) {
  console.log(aluno);
}

//Arrays
let listaDeAlunos: Aluno[] = [];
listaDeAlunos.push(aluno1);
listaDeAlunos.push(aluno2);
listaDeAlunos.push(aluno3);
listaDeAlunos.push(aluno4);

exibirListaDeAlunos(listaDeAlunos);

function exibirListaDeAlunos(alunos: Aluno[]) {
  console.log(alunos);
}

//tuplas (como se fosse um dicionario)
type Funcionario = [number, string];
let funcionarios: Funcionario = [1, "Antonio"];
funcionarios.push(2, "Leonardo");
funcionarios.push(3, "Geromel");
funcionarios.push(4, "Marina");

//Datas
let aniversario: Date = new Date(Date.now());
console.log(aniversario.toString());

console.log();

// funcoes multiTipos
function funcaoMultiTipo(elemento: string | number): void {
  console.log(elemento);
  console.log("Tipo do elemento é: " + typeof elemento);
}

funcaoMultiTipo(12345);
funcaoMultiTipo("sou uma string");
