console.log("Conversão de tipos")

//concatenando informações
console.log("ano: " + 2020) //texto + numerico
console.log("2" + "2") // texto + texto

//efetuando a coversão de tipo
console.log(parseInt("2") + parseInt("2")) // Conversão explícita

console.log("10" / "2") //Conversão implícita
console.log("7" / "2") //Conversão implícita
console.log("8.5" / "2") //Conversão implícita  ---> quando designamos um número de ponto flutuante devemos usar o .(ponto) e não a , (virgula) como sinal, conforme padrão americano/linguagem
console.log("Ricardo" / "2") //NAN (Not a Number) ---> o JS não consegue efetuar essa conversão

