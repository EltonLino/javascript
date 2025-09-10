let num = [1, 2, 3, 9]

console.log(`Nosso vetor é o ${num}`)
console.log(num)
num[4]=5
console.log(num)
num.push(6)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
num.sort()
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//Escrevendo com estrutura de repetição
for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//Simplificando o uso do for
for(let pos in num){
    console.log(num[pos])
}
//Buscando valores dentro do vetor
console.log(num.indexOf(5))
console.log(num.indexOf(10)) //Retorna -1 quando o valor não é encontrado