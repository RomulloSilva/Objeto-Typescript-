"use strict";
exports.__esModule = true;
var CarroProf_1 = require("./CarroProf");
var c1; // aqui apenas declarei uma "referencia" a um carro, preciso criar o objeto
var c2;
c1 = new CarroProf_1.Carro(); // agora sim, aloquei (reservei) memória para armazenar as coisas
c2 = new CarroProf_1.Carro();
// vamos preencher os dados
c1.ano = 2020;
c1.modelo = "Renegade";
c1.placa = "SPO5279";
c1.ligado = false;
c1.cor = "LARANJA";
c2.ano = 2019;
c2.modelo = "Compass";
c2.placa = "YBO0983";
c2.ligado = false;
c2.cor = "CINZA";
// vamos manipular o carro com suas operações
console.log("--------- Inicio da execucao...");
console.log(c1.getInfo());
console.log(c2.getInfo());
c1.andar();
c1.parar();
console.log("");
c2.ligar();
c2.andar();
c2.parar();
c2.desligar();
console.log(c1.getInfo());
console.log(c2.getInfo());
console.log("------- Final da execucao...");
