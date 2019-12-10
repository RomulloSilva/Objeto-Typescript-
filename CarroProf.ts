export class Carro {
    placa : string;
    cor   : string;
    modelo: string;
    ano   : number;
    ligado: boolean;

    ligar(): void{
        this.ligado = true;
        console.log("Carro "+this.modelo+ "  acabou de ser ligado");
    }
    desligar(): void{
        this.ligado = false;
        console.log("Carro "+this.modelo+ " esta desligado");
    }
    andar(): void{
        
        // mostrando mensagens usando concatenações
        if (this.ligado){
            console.log("O carro "+this.modelo+" ("+this.placa+") do ano "+this.ano+" ta andando...");
        }
        else{
            console.log("Para andar, ligue o carro "+this.modelo);
        }
    }

    parar():void {
        // mostrando mensagens usando expression languages
        if (this.ligado){
            console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} acabou de parar`);
        }
        else{
            console.log("Num da pra estacionar um carro desligado "+this.modelo);
        }
    }

    getInfo(): string {
        var info: string;
        info = `CARRO: ${this.modelo} / ${this.ano} / ${this.placa} / ${this.cor} / ${this.ligado}`;
        return info;
    }
}