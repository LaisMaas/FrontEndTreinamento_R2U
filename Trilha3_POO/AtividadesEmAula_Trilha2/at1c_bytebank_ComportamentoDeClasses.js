
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
    rg;
}

class ContaCorrente{
    agencia;
    saldo;
}

const ContaCorrente1 = new ContaCorrente();
ContaCorrente1.agencia = 1001;
ContaCorrente1.saldo = 0;

const ContaCorrente2 = new ContaCorrente();
ContaCorrente1.agencia = 1001;
ContaCorrente1.saldo = 0;

const ContaCorrente3 = new ContaCorrente();
ContaCorrente1.agencia = 1001;
ContaCorrente1.saldo = 0;

const ContaCorrente4 = new ContaCorrente();
ContaCorrente1.agencia = 1001;
ContaCorrente1.saldo = 0;


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
cliente1.rg = 23456765;

cliente2.nome = "Pietro";
cliente2.cpf = 12345678912;
cliente2.rg = 987654

cliente3.nome = "Manuella";
cliente3.cpf= 12345678913;

cliente4.nome = "Victória";
cliente4.cpf = 12345678914;


console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
console.log(cliente4);
