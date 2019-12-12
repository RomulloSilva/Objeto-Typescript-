"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/*Esssa é a estrutura para criar a herança utilizando o "extends" a classe "Professor" será filho de "Pessoa"*/
var Pessoas_1 = require("./Pessoas");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.getValorHora = function () {
        return this.valorHora;
    };
    Professor.prototype.setValorHora = function (valorHora) {
        this.valorHora = valorHora;
    };
    Professor.prototype.getNumHora = function () {
        return this.numHoras;
    };
    Professor.prototype.setNumHora = function (numHoras) {
        this.numHoras = numHoras;
    };
    Professor.prototype.getRegistro = function () {
        return this.registro;
    };
    Professor.prototype.setRegistro = function (registro) {
        this.registro = registro;
    };
    Professor.prototype.getAreaDeFormacao = function () {
        return this.areaDeFormacao;
    };
    Professor.prototype.setAreaDeFormacao = function (areaDeFormacao) {
        this.areaDeFormacao = areaDeFormacao;
    };
    return Professor;
}(Pessoas_1.Pessoa));
exports.Professor = Professor;
