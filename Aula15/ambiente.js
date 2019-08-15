let num = [5, 8, 2, 9, 3]
// adiciona um elemento no índice 5
num[5] = 6 

// adiciona um elemento na úlitma posição
num.push(7) 

// atributo para saber o comprimento do vetor
num.length

// método para ordernar o vetor
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// indexOf(8) procura em que posição do vetor está o valor 8
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O Valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

