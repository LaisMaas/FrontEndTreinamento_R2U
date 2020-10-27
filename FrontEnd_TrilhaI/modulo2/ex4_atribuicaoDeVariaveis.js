console.log("Atribuição de variáveis")

//Quanto menos for utilizado variáveis com let melhor
const idade = 29
const nome = "Laís"
const sobrenome = "Lopes"
let nome1 = "Manuella"

console.log(nome + " " + sobrenome) //concatenando os valores para visualização
console.log(nome, sobrenome) //separando os parâmetros/valores por vírgula
console.log(`Nome completo: ${nome} ${sobrenome}`) //template string

//const nome = nome + sobrenome //vai gerar um erro, porque estamos tentando subescrever uma constante
nomeCompleto = nome + " " + sobrenome
let nome2 = nome1 + " " + sobrenome

console.log(nomeCompleto)
console.log(nome2)