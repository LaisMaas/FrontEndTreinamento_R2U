
//Abstraindo as necessidades para construção da classe na aplicação bytebank temos:
/*
nome
CPF
saldo
agencia*/

//Classe cliente
class Cliente {
    cliente;
    cpf;
    agencia;
    saldo;
    rg;
}

//Construindo os objetos cliente 1,2,3,4 através da palavra reservada new
//new Cliente(); -> Constroi o objeto cliente
//const cliente1,2,3,4 -> aloca a construção deste cliente dentro das respectivas variáveis, para que estes possam ser instanciados 
const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();
const cliente4 = new Cliente();


//Instanciando os objetos da classe
cliente1.nome = "Pedro Henrique";
cliente1.cpf = 12345678911;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 23456765;

cliente2.nome = "Pietro";
cliente2.cpf = 12345678912;
cliente2.agencia = 1001;
cliente2.saldo = 0;
cliente2.rg = 987654

cliente3.nome = "Manuella";
cliente3.cpf= 12345678913;
cliente3.agencia = 1001;
cliente3.saldo = 0;

cliente4.nome = "Victória";
cliente4.cpf = 12345678914;
cliente4.agencia = 1001;
cliente4.saldo = 0;

//Imprimir no console
console.log(cliente1, cliente2, cliente3, cliente4);



//Código de referência da aula:

/*class Cliente{
    nome;
    cpf;
    agencia;
    saldo; 
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const cliente3Nome = "Alice";
const cliente3CPF = 88822233309;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;
console.log(cliente1, cliente2);*/
