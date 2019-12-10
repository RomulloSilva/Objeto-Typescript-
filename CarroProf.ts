//Nesse programa nossa classe esta sendo encapsulada, ou seja, usamos o "private", já os get e set são para pegar valor(get) e enviar(set) valor, são necessários porque atribuimos o encapsulamento.

    export class Carro {
    private placa : string;
    private cor   : string;
    private modelo: string;
    private ano   : number;
    private ligado: boolean;



/*Agora preciso de métodos especificos (Getters e Setters) para manipular meus atributos */


    public getPlaca(): string{
        return this.placa;
    }
    public setPlaca(placa: string): void{
        this.placa =placa;
    }
//------------------------------------------------//
    public getCor(): string{
        return this.cor;
    }
    public setCor(cor: string): void{
        this.cor =cor;
    }
//------------------------------------------------//
    public getModelo(): string{
        return this.modelo;
    }
    public setModelo(modelo: string): void{
        this.modelo =modelo;
    }
//------------------------------------------------//
    public getLigado(): boolean{
        return this.ligado;
    }
    public setLigado(ligado: boolean): void{
        this.ligado=ligado;
    }
//------------------------------------------------//
    public setAno(ano: number): void{
        if(ano<1900 || ano>2100){
            console.log("Ei!! valor do anor está errado");
        }
        else{
            this.ano = ano
        }
    }
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//

    public ligar(): void{
        this.ligado = true;
        console.log("Carro "+this.modelo+ "  acabou de ser ligado");
    }
    public desligar(): void{
        this.ligado = false;
        console.log("Carro "+this.modelo+ " esta desligado");
    }
    public andar(): void{
        
        // mostrando mensagens usando concatenações
        if (this.ligado){
            console.log("O carro "+this.modelo+" ("+this.placa+") do ano "+this.ano+" ta andando...");
        }
        else{
            console.log("Para andar, ligue o carro "+this.modelo);
        }
    }

    public parar():void {
        // mostrando mensagens usando expression languages
        if (this.ligado){
            console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} acabou de parar`);
        }
        else{
            console.log("O carro modelo "+this.modelo+" está desligado");
        }
    }

    public getInfo(): string {
        var info: string;
        info = `CARRO: ${this.modelo} / ${this.ano} / ${this.placa} / ${this.cor} / ${this.ligado}`;
        return info;
    }
}