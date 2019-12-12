export class Pessoa {
    private nome: string;
    private email: string;
    private telefone: string;
    private endereco: string;

    public setNome(nome: string): void {
        this.nome = nome;
    }
    public getNome(): string {
        return this.nome;
    }
    public setEmail(email: string): void{
        this.email = email;
    }
    public getEmail(): string{
        return this.email;
    }
    public setTelefone(telefone: string): void{
        this.telefone = telefone;
    }
    public getTelefone(): string{
        return this.telefone;
    }
   
    public setEndereco(endereco: string): void{
        this.endereco = endereco;
    }
    public getEndereco(): string{
        return this.endereco;
     }
    


}