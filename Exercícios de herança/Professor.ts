/*Esssa é a estrutura para criar a herança utilizando o "extends" a classe "Professor" será filho de "Pessoa"*/
import { Pessoa } from "./Pessoas";
export class Professor extends Pessoa {
    private valorHora       : number;
    private numHoras        : number;
    private registro        : number;
    private areaDeFormacao  : string;

    public getValorHora(): number{
        return this.valorHora;
    }
    public setValorHora(valorHora: number): void{
        this.valorHora = valorHora;
    }
    public getNumHora(): number{
        return this.numHoras;
    }
    public setNumHora(numHoras: number): void{
        this.numHoras = numHoras;

    }
    public getRegistro(): number{
        return this.registro;
    }
    public setRegistro(registro: number): void{
        this.registro = registro;
        
    }
    public getAreaDeFormacao(): string{
        return this.areaDeFormacao;
    }
    public setAreaDeFormacao(areaDeFormacao: string): void{
        this.areaDeFormacao = areaDeFormacao;
        
    }

   /* public getInfo(): string{
        var msg     : string;
        msg =`O prof.${this.nome} de registro: ${this.registro} tem seu valor por hora de R$ ${this.valorHora}.`;
        return msg
    }
    public getInfo2(): string{
    var msg2    : string;
    msg2 = `No mês atual ele fez ${this.numHoras} horas.`;
    return msg2;
}*/
}