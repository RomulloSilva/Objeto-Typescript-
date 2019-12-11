"use strict";
exports.__esModule = true;
var Produto_1 = require("./Produto");
var p1;
var p2;
p1 = new Produto_1.Produto(453, "Smartphone", "Iphone/Amarelo/64gb", 3999.00, 147, "https://imagenIphone");
p2 = new Produto_1.Produto(857, "Smartphone", "Samsung/Preto/128gb", 2199.00, 75, "https://imagenSamsung");
/* Ao colocarmos as classes em texto automaticamento o javascript coloca no formato Json. */
console.log(p1);
console.log(p2);
console.log("*******PRODUTOS********");
console.log(p1.getTexto());
console.log(p1.getMsg());
console.log(p2.getTexto());
console.log(p2.getMsg());
console.log("*******OBRIGADO********");
