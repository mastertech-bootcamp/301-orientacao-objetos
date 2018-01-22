var calculadorJuros = {
    jurosSimples: function (umValor, umTempo, umaTaxa) {
        return umValor * umTempo * umaTaxa;
    },
    jurosCompostos: function (umValor, umTempo, umaTaxa) {
        return (umValor * Math.pow((1 + umaTaxa), umTempo)) - umValor;
    }
};
var resultado = calculadorJuros.jurosCompostos(500000, 12, 0.026);
console.log(resultado);
