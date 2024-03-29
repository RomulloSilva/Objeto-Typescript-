"use strict";
//Nesse programa nossa classe esta sendo encapsulada, ou seja, usamos o "private", já os get e set são para pegar valor(get) e enviar(set) valor, são necessários porque atribuimos o encapsulamento.
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    /*Agora preciso de métodos especificos (Getters e Setters) para manipular meus atributos */
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (placa) {
        this.placa = placa;
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
            console.log("Ei!! valor do anor está errado");
        }
        else {
            this.ano = ano;
        }
    };
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    Carro.prototype.ligar = function () {
        this.ligado = true;
        console.log("Carro " + this.modelo + "  acabou de ser ligado");
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
        console.log("Carro " + this.modelo + " esta desligado");
    };
    Carro.prototype.andar = function () {
        // mostrando mensagens usando concatenações
        if (this.ligado) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " ta andando...");
        }
        else {
            console.log("Para andar, ligue o carro " + this.modelo);
        }
    };
    Carro.prototype.parar = function () {
        // mostrando mensagens usando expression languages
        if (this.ligado) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " acabou de parar");
        }
        else {
            console.log("O carro modelo " + this.modelo + " está desligado");
        }
    };
    Carro.prototype.getInfo = function () {
        var info;
        info = "CARRO: " + this.modelo + " / " + this.ano + " / " + this.placa + " / " + this.cor + " / " + this.ligado;
        return info;
    };
    return Carro;
}());
exports.Carro = Carro;
