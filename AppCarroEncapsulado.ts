//Aqui ele importa a classe Carro que foi exportado do arquivo Carro.ts, mesmo estando na mesma pasta usamos "./nome-do-arquivo".
import {Carro} from "./CarroEncapsulado";

//var ou let tanto faz. fizemos apenas a "referência" a um carro devemos criar um objeto.
var c1: Carro;
c1 = new Carro();
//preechendo dados.
c1.setAno(2020);
c1.setModelo("Renegade");
c1.setPlaca("CDB8975");
c1.setCor("Laranja")
//Manipulando a classe Carro com suas operações.
c1.andar();
c1.parar();
console.log("");//pular linha.

var c2: Carro;
c2 = new Carro();

c2.setAno(2021);
c2.setModelo("Compass");
c2.setPlaca("XVW4397");
c2.setCor("Cinza");

c2.andar();
c2.parar();