//Afirmando algum tipo

let statusAtual: unknown = 1;
let mudaSatus: number = 0;

//afimrnado que o status atual é um número
mudaSatus = statusAtual as number;
mudaSatus = <number>statusAtual;
