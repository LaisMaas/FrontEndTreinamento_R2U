////*****************Atributos Privados/Protegendo os atributos dos métodos**************/

class Cliente {
    cliente;
    cpf;
    rg;
}


class ContaCorrente{
    agencia;
    #saldo = 0;

    sacar(valor){
        if (this.#saldo >= valor){
            this.#saldo -= valorSacado;   
        } else {
            console.log("O valor de saldo é menor do que o valor solicitado para saque.");
        }    
    }

   depositar(valor){
       if(valor > 0){
           this.#saldo += valor;
           //console.log("Os valores depositados até às 16:00 horas em dias úteis //serão autalizados no mesmo dia, após conferência.");
           //console.log("Os valores depositados após às 16:00 horas em dias úteis //ou em dias não úteis serão autalizados no dia útil seguinte, após //conferência.");
       }else if(valor > 5000){
           console.log("Para valores acima de 5000 mil reais, solicitamos realização direta com o banco.");
       } else{
        console.log("Operação não realizado em virtude de valor negativo.")
       }
       console.log(this.#saldo)
    } 
}

//construindo e instânciando a conta Corrente1
const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
console.log(contaCorrente1)

//Alterando saldo através da simulação de depósito da conta corrente1
contaCorrente1.depositar(100);
contaCorrente1.depositar(200);
contaCorrente1.depositar(70000);
contaCorrente1.depositar(-1);
//console.log(contaCorrente1)


//construindo e instânciando a conta Corrente2
const contaCorrente2 = new ContaCorrente();
contaCorrente1.agencia = 1001;


//construindo e instânciando a conta Corrente3
const contaCorrente3 = new ContaCorrente();
contaCorrente1.agencia = 1001;


//construindo e instânciando a conta Corrente4
const contaCorrente4 = new ContaCorrente();
contaCorrente1.agencia = 1001;
//contaCorrente1.#saldo = 0;  // ---> A ação de chamar o método  e tentar atribuir valor irá incidir em erro, porque o mesmo já foi protegido para não ser acessado fora da classe
//console.log(contaCorrente1)


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