//João está criando uma aplicação para calcular o IR a partir do salário. Ele olhou na tabela de IRPF e implementou as regras para 15% e 22.5%:

/*Base de cálculo 2020: 
BASE DE CÁLCULO (R$)	ALÍQUOTA (%)	PARCELA A DEDUZIR DO IRPF
Até 1.903,98	isento	isento
De 1.903,99 até 2.826,65	7,5%	R$142,80
De 2.826,66 até 3.751,05	15%	R$354,80
De 3.751,06 até 4.664,68	22,5%	R$636,13
Acima de 4.664,68	27,5%	R$869,36*/

const salario = 3300.00

if (salario <= 1903.98) {
    console.log(`Valor isento de imposto`)
    console.log(salario)
    
} else if (salario >= 1903.99 && salario <= 2826.65) {
    console.log(`O percentual da alícota é de R$ 7.5%. Valor do desconto: `)
    console.log((salario * 7.5) / 100)
    
} else if (salario >= 2826.66 && salario <= 3751.05) {
    console.log(`O percentual da alícota é de R$ 15%. Valor do desconto: `)
    console.log((salario * 15) / 100)
    
} else if (salario >= 3751.06 && salario <= 4664.68) {
    console.log(`O percentual da alícota é de R$ 22.5%. Valor do desconto: `)
    console.log((salario * 22.5) / 100)    

} else {
    console.log(`O percentual da alícota é de R$ 27.5%. Valor do desconto: `)
    console.log((salario * 27.5) / 100)    
}
