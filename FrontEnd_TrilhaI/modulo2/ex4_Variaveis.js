console.log("Atribuição de variáveis")

//Evitar utilizar a opção let na declaração das variavéis

const saudacao //declaração da variável
saudacao = "Bem vinda!" //atribuição da variável
const nome = "Laís"
const sobrenome = "Lopes"
let nome1 = "Manuella"
const idade = 29

console.log(nome + " " + sobrenome) //concatenando os valores para visualização
console.log(nome, sobrenome) //separando os parâmetros/valores por vírgula
console.log(`Nome completo: ${nome} ${sobrenome}`) //template string

//const nome = nome + sobrenome //vai gerar um erro, porque estamos tentando subescrever uma constante
nomeCompleto = nome + " " + sobrenome
let nome2 = nome1 + " " + sobrenome

console.log(nomeCompleto)
console.log(nome2)