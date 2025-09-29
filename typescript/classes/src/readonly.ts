class Pessoa {
  readonly id: string = "123";
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    (this.nome = nome), (this.idade = idade);
  }
}

const ana = new Pessoa("Ana", 21);
console.log(ana.id);
