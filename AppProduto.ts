import {Produto} from "./Produto";
 let p1: Produto;
 let p2: Produto;

 p1 = new Produto(453,"Smartphone","Iphone/Amarelo/64gb",3999.00,147,"https://imagenIphone");

 p2 = new Produto(857,"Smartphone","Samsung/Preto/128gb",2199.00,75,"https://imagenSamsung");

 /* Ao colocarmos as classes em texto automaticamento o javascript coloca no formato Json. */
 console.log(p1);
 console.log(p2);

 console.log("*******PRODUTOS********");
 console.log(p1.getTexto());
 console.log(p1.getMsg());
 console.log(p2.getTexto());
 console.log(p2.getMsg());
 console.log("*******OBRIGADO********");