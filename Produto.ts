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
     texto = ` O codigo : ${this.codigo} \n Produto : ${this.nome} \n Detalhes : ${this.detalhes}.\n Preço em R$ ${this.preco}\n Quantidade em estoque : ${this.estoque}.\n Link para imagem ${this.linkFoto}.`;
     
     return texto;
}
public getMsg(): string{
    return `Seu ${this.detalhes} com o preço de R$ ${this.preco} foi enviado.`;
}

}


/*Template de Classes em TypeScript

export class [NOME DA CLASSE] {
   // LISTA DE ATRIBUTOS
   private [NOME DO ATRIBUTO]: [TIPO];
   ...

   (opcional)
   public constructor([LISTA DE PARAMETROS]) {    
       // CODIGO DAS ATRIBUIÇÕES
       this.[NOME DO ATRIBUTO] = [NOME DO PARAMETRO];
       ...
   }

   (métodos)

   (padrão 1 - getters e setters)
   public get[NOME DO ATRIBUTO](): [TIPO DO ATRIBUTO]{
       return this.[NOME DO ATRIBUTO];
   }

   public set[NOME DO ATRIBUTO]( [NOME DO PARAMETRO] : [TIPO DO PARAMETRO]): void {
       this.[NOME DO ATRIBUTO] = [NOME DO PARAMETRO];
   }

} */