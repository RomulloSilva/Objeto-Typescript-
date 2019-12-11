"use strict";
exports.__esModule = true;
var Produto = /** @class */ (function () {
    /* O construtor serve para obrigar que a classe seja iniciada com os valores definidos */
    function Produto(codigo, nome, detalhes, preco, estoque, linkFoto) {
        this.codigo = codigo;
        this.nome = nome;
        this.detalhes = detalhes;
        this.preco = preco;
        this.estoque = estoque;
        this.linkFoto = linkFoto;
    }
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Produto.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    Produto.prototype.setDetalhes = function (detalhes) {
        this.detalhes = detalhes;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    Produto.prototype.getEstoque = function () {
        return this.estoque;
    };
    Produto.prototype.setEstoque = function (estoque) {
        this.estoque = estoque;
    };
    Produto.prototype.getLinkFoto = function () {
        return this.linkFoto;
    };
    Produto.prototype.setLinkFoto = function (linkFoto) {
        this.linkFoto = linkFoto;
    };
    Produto.prototype.getTexto = function () {
        var texto;
        texto = "O codigo de produto \u00E9 " + this.codigo + " sendo ele um " + this.nome + " e seus detalhes " + this.detalhes + ". Pre\u00E7o em R$ " + this.preco + ", quantidade em estoque " + this.estoque + ". Link para imagem " + this.linkFoto + ".";
        return texto;
    };
    return Produto;
}());
exports.Produto = Produto;
/*codigo:number, nome:string, detalhes:string, preco:number, estoque:number, linkFoto:string */ 
