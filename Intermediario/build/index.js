"use strict";
//classes, interfaces e modificadores
class Jogador {
    constructor(nome, forca, vida, possuiPoderEspecial) {
        this.nome = nome;
        this.forca = forca;
        this.vida = vida;
        this.possuiPoderEspecial = possuiPoderEspecial;
        Jogador.quantidadeDeJogadores++;
    }
    exibirQuantidadeDeJogadores() {
        return Jogador.quantidadeDeJogadores;
    }
}
Jogador.quantidadeDeJogadores = 1;
class Guerreiro extends Jogador {
    constructor(nome, forca, vida, possuiPoderEspecial, espada) {
        super(nome, forca, vida, possuiPoderEspecial);
        this.espada = espada;
    }
    fala(texto) {
        console.log(`${this.nome}: \t${texto}`);
    }
    status() {
        return `${this.nome} - classe: Guerreiro, vida: ${this.vida}`;
    }
    atacar() {
        console.log(`${this.nome} atacou com ${this.espada} e deu ${this.forca} de dano!`);
        return this.forca;
    }
}
class Mago extends Jogador {
    constructor(nome, forca, vida, possuiPoderEspecial, magia) {
        super(nome, forca, vida, possuiPoderEspecial);
        this.magia = magia;
    }
    fala(texto) {
        console.log(`${this.nome}: \t${texto}`);
    }
    status() {
        return `${this.nome} - classe: Mago, vida: ${this.vida}`;
    }
    atacar() {
        console.log(`${this.nome} usou ${this.magia} e deu ${this.forca} de dano!`);
        return this.forca;
    }
}
let guerreiro1 = new Guerreiro("Felipe", 7, 20, false, "Excalibur");
guerreiro1.nome;
console.log(guerreiro1.status());
guerreiro1.fala("ARRGGGH, SOU UM GUERREIRO!!!");
console.log();
let mago1 = new Mago("John", 11, 14, true, "Chuva de Meteoro");
mago1.nome;
console.log(mago1.status());
mago1.fala("Olá, sou um nobre mago!");
console.log(mago1.atacar());
