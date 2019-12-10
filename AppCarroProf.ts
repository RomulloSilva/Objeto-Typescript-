    import { Carro } from "./CarroProf";
    // aqui apenas declarei uma "referencia" a um carro, preciso criar o objeto
    let c1: Carro;    
    let c2: Carro; 
    // agora sim, aloquei (reservei) memória para armazenar as coisas 
    c1 = new Carro(); 
    c2 = new Carro();

// vamos preencher os dados
    c1.setAno   (2020);
    c1.setModelo("Jeep Renegade");
    c1.setPlaca ("SPO5279");
    c1.setLigado(false);
    c1.setCor   ("LARANJA");
//Colocar o set para o programa entender que esse valor esta sendo atribuido
    c2.setAno(2019);
    c2.setModelo("Jeep Compass");
    c2.setPlaca("YBO0983");
    c2.setLigado(false);
    c2.setCor("CINZA");


// vamos manipular o carro com suas operações
    console.log("--------- Inicio da execucao------------");
    console.log(c1.getInfo());
    console.log(c2.getInfo());

    c1.andar();
    c1.parar();

    console.log("");

    c2.ligar();
    c2.andar();
    c2.parar();
    c2.desligar();

    console.log(c1.getInfo());
    console.log(c2.getInfo());
    console.log("----------Final da execucao--------");





