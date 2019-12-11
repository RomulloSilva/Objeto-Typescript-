export class Produto{
    private codigo     : number;
    private nome       : string;
    private detalhes   : string;
    private preco      : number;
    private estoque    : number;
    private linkFoto   : string;

   /* O construtor serve para obrigar que a classe seja iniciada com os valores definidos */
    public constructor(codigo:number, nome:string, detalhes:string, preco:number, estoque:number, linkFoto:string){
        this.codigo     = codigo;
        this.nome       = nome;
        this.detalhes   = detalhes;
        this.preco      = preco;
        this.estoque    = estoque;
        this.linkFoto   = linkFoto;
    }


public getCodigo(): number{
    return this.codigo;
}
public setCodigo(codigo: number): void{
    this.codigo = codigo;
}

public getNome(): string{
    return this.nome;
}
public setNome(nome: string): void{
    this.nome = nome;
}

public getDetalhes(): string{
    return this.detalhes;
}
public setDetalhes(detalhes: string): void{
    this.detalhes = detalhes;
}

public getPreco(): number{
    return this.preco;
}
public setPreco(preco: number): void{
    this.preco = preco;
}

public getEstoque(): number{
    return this.estoque;
}
public setEstoque(estoque: number): void{
    this. estoque = estoque;
}


public getLinkFoto(): string{
    return this.linkFoto;
}
public setLinkFoto(linkFoto: string): void{
    this.linkFoto = linkFoto;
}

public getTexto(): string{
    var texto: string;
     texto = `O codigo de produto é ${this.codigo} sendo ele um ${this.nome} e seus detalhes ${this.detalhes}. Preço em R$ ${this.preco}, quantidade em estoque ${this.estoque}. Link para imagem ${this.linkFoto}.`;
     
     return texto;
}

}


/*codigo:number, nome:string, detalhes:string, preco:number, estoque:number, linkFoto:string */