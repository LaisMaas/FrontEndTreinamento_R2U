/*O objetivo agora é criarmos um sistema de conta-corrente e cadastro de clientes para o contratante Bytebank, de modo que seja possível manipular o saldo desses usuários e realizar operações bancárias.

Trabalhando com Orientação a Objetos, conheceremos diversos novos conceitos, como a palavra new, a entidade Cliente (que nós mesmos criaremos), as chamadas de métodos depositar() e sacar(), que não são da linguagem (e inclusive estão em português) e assim por diante.

Um dos conceitos principais de Orientação a Objetos que será abordado nesse curso são as classes. No caso, teremos uma classe ContaCorrente contendo atributos estáticos, atributos privados e uma nova proposição para os atributos privados da linguagem, com cerquilha (#) precedendo o atributo, ao invés da convenção atual, que é o underline (_).

Trabalharemos também com os assessores get e set, como os construtores facilitam o nosso fluxo de criação de classes e objetos e como conseguimos nomear comportamentos e compartilhá-los, facilitando a leitura do código. Nisso utilizaremos toda a base de lógica do primeiro curso, usando tipos primitivos, condicionais e assim por diante.*/


//O código possui muita repetição, pelo qual, é importante extrairmos os itens comuns a todas as variáveis para uma classe e construirmos os objetos a partir destas, conforme a versão2 do código
const cliente1 = "Pedro Henrique";
const cliente1CPF = 12345678911;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

const cliente2 = "Pietro";
const cliente2CPF = 12345678912; 
const cliente2Agencia = 1001;
const cliente2Saldo = 0;

const cliente3 = "Manuella";
const cliente3CPF = 12345678913;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;

const cliente4 = "Victória";
const cliente4CPF = 12345678914;
const cliente4Agencia = 1001;
const cliente4Saldo = 0;

console.log(cliente1, cliente1CPF, cliente1Agencia, cliente1Saldo);
console.log(cliente2, cliente2CPF, cliente2Agencia, cliente2Saldo);
console.log(cliente3, cliente3CPF, cliente3Agencia, cliente3Saldo);
console.log(cliente4, cliente4CPF, cliente4Agencia, cliente4Saldo);