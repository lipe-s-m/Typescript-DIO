//decorators
console.log();

function ExibirNome(target: any): void {
  console.log("Fui chamado por " + target);
}

@ExibirNome
class Funcionario {}

function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  };
}

function minLenght(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(
          `Error: o tamanho da palavra ${key} é menor que ${length}`
        );
      } else _value = value;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

@apiVersion("1.7.10")
class Api {
  @minLenght(5)
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api("nome qualquer");
api.name = "Cardapio";
console.log(api.name);
console.log(api.__version);
