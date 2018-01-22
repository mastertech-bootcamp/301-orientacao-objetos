var maquina = {
    precoMilkshake: 10,
    sabores: ['Morango', 'Creme', 'Chocolate'],
    valorVendas: 0,
    fazerMilkshake: function (sabor) {
        maquina.valorVendas = maquina.valorVendas + maquina.precoMilkshake;
        return "Milkshake de " + sabor;
    }
};
var meuMilkshake = maquina.fazerMilkshake('Morango');
console.log(meuMilkshake);
