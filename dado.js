var Dado = /** @class */ (function () {
    function Dado(escolhaLados, escolhaCor) {
        this.lados = escolhaLados;
        this.cor = escolhaCor;
    }
    Dado.prototype.sortear = function () {
        return Math.ceil(Math.random() * this.lados);
    };
    return Dado;
}());
var umDado = new Dado(12, 'azul');
var maisUmDado = new Dado(20, 'preto');
console.log(umDado.sortear());
console.log(maisUmDado.sortear());
