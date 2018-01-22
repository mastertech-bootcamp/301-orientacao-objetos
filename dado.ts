declare let process;

class Dado{
    lados:number;
    cor:string;

    constructor(escolhaLados:number, escolhaCor: string){
        this.lados = escolhaLados;
        this.cor = escolhaCor;
    }

    sortear():number{
        return Math.ceil(Math.random() * this.lados);
    }
}

let umDado = new Dado(12, 'azul');
let maisUmDado = new Dado(20, 'preto');

console.log(umDado.sortear());
console.log(maisUmDado.sortear());