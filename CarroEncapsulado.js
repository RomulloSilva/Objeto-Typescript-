"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    //------------------------------------------------//
    Carro.prototype.getPlaca = function () {
        return this.placa;
        //estrutura  do get(envia valor usuário ver)
    };
    Carro.prototype.setPlaca = function (placa) {
        this.placa = placa;
        //estutura do set(pegar valor usuário digita)
    };
    //------------------------------------------------//
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    //------------------------------------------------//
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    //------------------------------------------------//
    Carro.prototype.getLigado = function () {
        return this.ligado;
    };
    Carro.prototype.setLigado = function (ligado) {
        this.ligado = ligado;
    };
    //------------------------------------------------//
    Carro.prototype.setAno = function (ano) {
        if (ano < 1900 || ano > 2100) {
            console.log("Ano inválido");
        }
        else {
            this.ano = ano;
        }
    };
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //Criando funcionalidade
    Carro.prototype.ligar = function () {
        this.ligado = true;
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
    };
    Carro.prototype.andar = function () {
        if (this.ligado != true) {
            this.ligar();
        }
        console.log("O carro está ligado. " + this.ligado);
        console.log("O carro " + this.modelo + " do ano " + this.ano + " e placa " + this.placa + " e de cor " + this.cor + " ta andando...");
    };
    Carro.prototype.parar = function () {
        if (this.ligado == true) {
            this.desligar();
        }
        //Mostrando mensagens usando expression language(crase no lugar das aspas e ${}).
        console.log("O carro " + this.modelo + " do ano " + this.ano + " e placa " + this.placa + " e de cor " + this.cor + " acabou de parar");
        console.log("O carro está desligado. " + this.ligado);
    };
    Carro.prototype.getInfo = function () {
        var info;
        info = "CARRO: " + this.modelo + "/" + this.ano + "/" + this.placa + "/" + this.cor;
        return info;
    };
    return Carro;
}());
exports.Carro = Carro;
