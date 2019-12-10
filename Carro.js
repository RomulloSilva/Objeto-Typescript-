"use strict";
exports.__esModule = true;
//Criando a classe, o "export" é para torna-lá pública utilizável em outros programas, Nome com maiúsculo por norma.
var Carro = /** @class */ (function () {
    function Carro() {
    }
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
    return Carro;
}());
exports.Carro = Carro;
