//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log(`Introdução a listas`)

// ? *

//O índice do array inicia em 0
//O tamanho do array é contado pela quantidade de elemento e não pelo índice
//Trabalhando com os métodos POP e PUSH
console.log(`---------Destinos sudeste--------- `)
const destinosSudeste = new Array(
    'Espírito Santo',
    'Minas Gerais',
    `Pará`,
    'Rio de Janeiro',
    'Paraná',
);
console.log(destinosSudeste)
destinosSudeste.pop()//remove o último elemento da lista
destinosSudeste.push(`São Paulo`)//adiciona novo elemento na última posição da lista
destinosSudeste.splice(2,1)//remove um ou mais elementos da lista --> splice(posição, quantidadeElementos)
console.log(destinosSudeste)//imprimir no console conteúdo da lista ou variável ou objeto...
console.log(destinosSudeste[1])//imprimir uma posição específica do array conforme o índice passado no parâmetro
console.log(destinosSudeste[1], destinosSudeste[0])//imprimir mais de uma posição específica do array conforme o índice passado no parâmetro


//Trabalhando com os métodos ENTRIES e
console.log(`---------Destinos sul--------- `)
const destinosSul = new Array(    
    `Paraná`,
    `Santa Catarina`,
    `Rio Grande do Sul`,    
);
console.log(destinosSul)
const frontUruguaiParaguai = destinosSul.slice(0, 2)
console.log(frontUruguaiParaguai)
//const destSul = destinosSul.entries()
//console.log(destinosSul.next().value)





//Trabalhando com os métodos SHIFT e  UNSHIFT
console.log(`---------Destinos nordeste--------- `)
const destinosNordeste = new Array(
    `Acre`,    
    `Bahia`,
    `Ceará`,
    `Maranhão`,
    `Paraíba`,
    `Pernambuco`,
    `Piauí`,
    `Sergipe`,
    `Rio Grande do Sul`,
);
destinosNordeste.shift()//remove o primeiro elemento da lista
destinosNordeste.unshift(`Alagoas`)//adiciona novo elemento na primeira posição da lista
console.log(destinosNordeste)



console.log(`---------Destinos norte--------- `)
const destinosNorte = new Array(
    `Acre`,
    `Amapá`,
    `Amazonas`,    
    `Pará`,
    `Roraima`,
    `Rondônia`,
    `Tocantins`,    
)
console.log(destinosNorte)


