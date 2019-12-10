
export class Carro {
    //aqui os atributos receberam o "private" para que sua visibilidade seja apenas dentro da classe
    private placa: string;
    private cor: string;
    private modelo: string;
    private ano: number;
    private ligado: boolean;
 //------------------------------------------------//
    public getPlaca(): string{
        return this.placa;
        //estrutura  do get(envia valor usuário ver)
    }
    public setPlaca(placa: string): void{
        this.placa =placa;
        //estutura do set(pegar valor usuário digita)
    }
 //------------------------------------------------//
    public getCor(): string{
        return this.cor;
    }
    public setCor(cor:string): void{
        this.cor=cor;
    }
 //------------------------------------------------//
    public getModelo():string {
        return this.modelo;
    }
    public setModelo(modelo:string): void{
        this.modelo=modelo;
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
            console.log("Ano inválido");
        }
        else{
            this.ano = ano
        }
    }

    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //Criando funcionalidade

    ligar(): void {
        this.ligado = true;
    }
    desligar(): void {
        this.ligado = false;
    }

    andar(): void {
        if (this.ligado != true) {
            this.ligar()
        }
        console.log("O carro está ligado. " + this.ligado)
        console.log("O carro " + this.modelo + " do ano " + this.ano + " e placa " + this.placa + " e de cor " + this.cor + " ta andando...");
    }

    parar(): void {
        if (this.ligado == true) {
            this.desligar()
        }
        //Mostrando mensagens usando expression language(crase no lugar das aspas e ${}).
        console.log(`O carro ${this.modelo} do ano ${this.ano} e placa ${this.placa} e de cor ${this.cor} acabou de parar`);
        console.log("O carro está desligado. " + this.ligado)
    }

    getInfo(): string {
        var info: string;
        info = `CARRO: ${this.modelo}/${this.ano}/${this.placa}/${this.cor}`;
        return info;
    }
}