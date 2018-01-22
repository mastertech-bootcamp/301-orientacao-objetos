// let maquina = {
//     precoMilkshake: 10,
//     sabores: ['Morango', 'Creme', 'Chocolate'],
//     valorVendas: 0,
//     fazerMilkshake: function(sabor){
//         maquina.valorVendas = maquina.valorVendas + maquina.precoMilkshake;  
//         return `Milkshake de ${sabor}`;
//     }
// }

class MaquinaMilkshake{
    precoMilkshake = 10;
    sabores = ['Morango', 'Creme', 'Chocolate'];
    valorVendas = 0;
    
    fazerMilkshake(sabor){
        this.valorVendas = this.valorVendas + this.precoMilkshake;  
        return `Milkshake de ${sabor}`;        
    }
}

let maquina1 = new MaquinaMilkshake();
let maquina2 = new MaquinaMilkshake();

maquina1.fazerMilkshake('chocolate');
maquina1.fazerMilkshake('chocolate');
maquina1.fazerMilkshake('creme');
maquina2.fazerMilkshake('chocolate');

console.log('A máquina 1 tem R$ ' + maquina1.valorVendas);
console.log('A máquina 2 tem R$ ' + maquina2.valorVendas);