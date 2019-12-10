    //Criando a classe, o "export" é para torna-lá pública utilizável em outros programas, Nome com maiúsculo por norma.
    export class Carro{
    //aqui estão os atributos, e para chamá-los devemos utilizar a membresia "this.atributo"
    placa : string;
    cor   : string;
    modelo: string;
    ano   : number;
    ligado: boolean;

    //Criando funcionalidade

    ligar(): void{
    this.ligado = true;     
     }
    desligar(): void{
     this.ligado = false; 
     }

    andar():void{
        if(this.ligado != true){
            this.ligar()
        }
        console.log("O carro está ligado. "+this.ligado)
        console.log("O carro "+this.modelo+" do ano "+this.ano+" e placa "+this.placa+" e de cor "+this.cor+" ta andando...");
    }
    
    parar():void{
        if(this.ligado == true){
            this.desligar()
        }
        //Mostrando mensagens usando expression language(crase no lugar das aspas e ${}).
        console.log(`O carro ${this.modelo} do ano ${this.ano} e placa ${this.placa} e de cor ${this.cor} acabou de parar`);
        console.log("O carro está desligado. "+this.ligado)
    }
}