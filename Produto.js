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
        texto = " O codigo : " + this.codigo + " \n Produto : " + this.nome + " \n Detalhes : " + this.detalhes + ".\n Pre\u00E7o em R$ " + this.preco + "\n Quantidade em estoque : " + this.estoque + ".\n Link para imagem " + this.linkFoto + ".";
        return texto;
    };
    Produto.prototype.getMsg = function () {
        return "Seu " + this.detalhes + " com o pre\u00E7o de R$ " + this.preco + " foi enviado.";
    };
    return Produto;
}());
exports.Produto = Produto;
/*Template de Classes em TypeScript

export class [NOME DA CLASSE] {
   // LISTA DE ATRIBUTOS
   private [NOME DO ATRIBUTO]: [TIPO];
   ...

   (opcional)
   public constructor([LISTA DE PARAMETROS]) {
       // CODIGO DAS ATRIBUIÇÕES
       this.[NOME DO ATRIBUTO] = [NOME DO PARAMETRO];
       ...
   }

   (métodos)

   (padrão 1 - getters e setters)
   public get[NOME DO ATRIBUTO](): [TIPO DO ATRIBUTO]{
       return this.[NOME DO ATRIBUTO];
   }

   public set[NOME DO ATRIBUTO]( [NOME DO PARAMETRO] : [TIPO DO PARAMETRO]): void {
       this.[NOME DO ATRIBUTO] = [NOME DO PARAMETRO];
   }

} */ 
