//classes, interfaces e modificadores

interface Personagem {
  fala(texto: string): void;
  status(): string;
}

abstract class Jogador {
  public readonly nome: string;
  protected forca: number;
  protected vida: number;
  protected possuiPoderEspecial: boolean;
  private static quantidadeDeJogadores: number = 1;

  constructor(
    nome: string,
    forca: number,
    vida: number,
    possuiPoderEspecial: boolean
  ) {
    this.nome = nome;
    this.forca = forca;
    this.vida = vida;
    this.possuiPoderEspecial = possuiPoderEspecial;
    Jogador.quantidadeDeJogadores++;
  }

  exibirQuantidadeDeJogadores(): number {
    return Jogador.quantidadeDeJogadores;
  }
  abstract atacar(): number;
}

class Guerreiro extends Jogador implements Personagem {
  public espada: string;
  constructor(
    nome: string,
    forca: number,
    vida: number,
    possuiPoderEspecial: boolean,
    espada: string
  ) {
    super(nome, forca, vida, possuiPoderEspecial);
    this.espada = espada;
  }
  fala(texto: string): void {
    console.log(`${this.nome}: \t${texto}`);
  }
  status(): string {
    return `${this.nome} - classe: Guerreiro, vida: ${this.vida}`;
  }

  atacar(): number {
    console.log(
      `${this.nome} atacou com ${this.espada} e deu ${this.forca} de dano!`
    );
    return this.forca;
  }
}

class Mago extends Jogador implements Personagem {
  public magia: string;
  constructor(
    nome: string,
    forca: number,
    vida: number,
    possuiPoderEspecial: boolean,
    magia: string
  ) {
    super(nome, forca, vida, possuiPoderEspecial);
    this.magia = magia;
  }
  fala(texto: string): void {
    console.log(`${this.nome}: \t${texto}`);
  }
  status(): string {
    return `${this.nome} - classe: Mago, vida: ${this.vida}`;
  }

  atacar(): number {
    console.log(`${this.nome} usou ${this.magia} e deu ${this.forca} de dano!`);
    return this.forca;
  }
}

let guerreiro1 = new Guerreiro("Felipe", 7, 20, false, "Excalibur");
guerreiro1.nome;
console.log(guerreiro1.status());
guerreiro1.fala("ARRGGGH, SOU UM GUERREIRO!!!");

console.log();
let mago1 = new Mago("John", 12, 15, true, "Chuva de Meteoro");
mago1.nome;
console.log(mago1.status());
mago1.fala("Olá, sou um nobre mago!");
console.log(mago1.atacar());
