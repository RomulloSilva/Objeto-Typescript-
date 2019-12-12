/**Aqui temos que fazer a importação das classes que dão e recebem herança.*/

import {Pessoa} from "./Pessoas"; //Classe pai.
import {Professor} from "./Professor"; //Classe que recebe herança.


var p: Pessoa;
p= new Pessoa();

p.setNome("Euclides da Cunha");
p.setEmail("Prof.Eucli@unifed.com.br");
p.setTelefone("+55 11 97842-1538");
p.setEndereco("Av. Ribeiro Cordeiro N°584");


var prof: Professor;
prof = new Professor();
prof.setValorHora(89.59);
prof.setNumHora(320);
prof.setRegistro(96542);
prof.setAreaDeFormacao("Engenharia/Tecnologia/Qualidade");

console.log(p,prof);

console.log("**************DADOS DO PROFESSOR*******************");
/*Outra forma de fazer sem criar duas variáveis para as classes. */
var prof2: Professor;
prof2 = new Professor();
prof2.setNome("Ruth Rocha");
prof2.setEmail("prof.rocha@unifed.com.br");
prof2.setTelefone("+55 11 91954-7852");
prof2.setEndereco("Av. Zuck Barrangam N°249");
prof2.setValorHora(92.62);
prof2.setNumHora(286);
prof2.setRegistro(489581);
prof2.setAreaDeFormacao("Estatística/Tecnologia/Finanças");

console.log(prof2);