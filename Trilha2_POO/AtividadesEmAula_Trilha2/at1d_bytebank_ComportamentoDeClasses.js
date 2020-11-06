
//************Comportamento das classes  2  contemplando saques*************/

//construindo e instânciando a conta Corrente1
const ContaCorrente1 = new ContaCorrente();
ContaCorrente1.agencia = 1001;
ContaCorrente1.saldo = 0;
console.log(ContaCorrente1)

//Alterando saldo através da simulação de depósito da conta corrente1
ContaCorrente1.saldo = 100.00;
console.log(ContaCorrente1)

//Alterando saldo através da simulação de depósito da conta corrente1
let valorSacado = 30;

//Condicional para regra de saque
if (ContaCorrente1.saldo >= valorSacado) {
    ContaCorrente1.saldo -= valorSacado    
} else {
    console.log("O valor de saldo é menor do que o valor solicitado para saque.")
}
console.log(ContaCorrente1)

//Construindo os objetos cliente 1,2,3,4 através da palavra reservada new
//new Cliente(); -> Constroi o objeto cliente
//const cliente1,2,3,4 -> aloca a construção deste cliente dentro das respectivas variáveis, para que estes possam ser instanciados 
const cliente1 = new Cliente();

//Instanciando os objetos da classe
cliente1.nome = "Pedro Henrique";
cliente1.cpf = 12345678911;
cliente1.rg = 23456765;