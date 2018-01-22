let calculadorJuros = {
    jurosSimples: function(umValor:number, umTempo:number, umaTaxa:number){
        return umValor * umTempo * umaTaxa;
    },
    jurosCompostos: function(umValor:number, umTempo:number, umaTaxa:number){
        return (umValor * (1 + umaTaxa) ** umTempo) - umValor;
    }
}

let resultado = calculadorJuros.jurosCompostos(500000, 12, 0.026);

console.log(resultado);