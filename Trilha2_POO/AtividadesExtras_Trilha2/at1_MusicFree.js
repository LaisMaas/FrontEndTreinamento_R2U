//Desenvolva uma plataforma de gerenciamento de músicas de acordo categorizadas para a utilização dos usuários.


//Estabelecendo a a classe referente ao acesso da aplicação
class Acesso{    
    nome;
    sobrenome;
    email;
    senha;
}

//Constuindo o objeto clinica matriz e filial da aplicação
const acesso1 = new Acesso();

//Instânciando os objetos clinica matriz e filial1 da aplicação
acesso1.nome = "Pedro";
acesso1.sobrenome = "Lopes";
acesso1.email = "pedro@lopes.com.br";
acesso1.senha = "";

//Classe tipo usuario
class TipoUsuario{
    administrador;
    comum;
}
 
const TipoUsuario1 = new TipoUsuario();

const usuarioAdministrador = new TipoUsuario();
const usuarioComun = new TipoUsuario();

//classe tipo artista
class Artista{
    nome;
}

const artista1 = new Artista();
const artista2 = new Artista();

artista1.nome = "Pitty";
artista2.nome = "Capital Inicial";


//Classe album
class Album{
    nomeAlbum;
    lancamento;
    qtdMinutos;
    visualizacao;   
}

const album1 = new Album();
const album2 = new Album();

album1.nomeAlbum = "Admirável Chip Novo";
album1.lancamento = "2002";
album1.qtdMinutos = 55;
album1.visualizacao = 3.421;

//Classe album
class Album{
    nomeEstilo    
}

const nomeEstilo1 = new Album();

nomeEstilo1.nomeEstilo = "Rock Nacional";



