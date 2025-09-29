"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jogo {
    servidor;
    id = "123";
    constructor(servidor) {
        this.servidor = servidor;
    }
    //metodo get = para pegar o valor ao inves de acessar diretamente a propriedade
    get getServidorIp() {
        console.log("===METODO GET==");
        return this.servidor;
    }
    //metodo set = passar /alterar algum atributo
    set setServidorIp(novoIp) {
        this.servidor = novoIp;
    }
}
const GTA5 = new Jogo("192.168.5.10");
GTA5.setServidorIp = "200.168.5.10";
console.log(GTA5.getServidorIp);
