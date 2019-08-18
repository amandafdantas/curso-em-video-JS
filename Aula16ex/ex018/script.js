// buscando os valores por querySelector
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // criando vetor para guardar os números digitados

// função para verificar se o número digitado está entre 1 e 100
function isNumero(n) {
   if(Number(n) >= 1 && Number(n) <= 100) {
       return true
   } else {
       return false
   }
}

// função para verificar se o número digitado já está na lista 
// passa como parâmetro o número digitado e a lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else { // se indexOf = -1, o número não foi encontrado
        return false 
    }
}

// função para adicionar o número digitado na lista
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // se ambas funções verdadeiras, entra na condição
        valores.push(Number(num.value)) // adiciona o número digitado no array valores
        let item = document.createElement('option')  // criando elemento option de forma dinâmica     
        item.text = `Valor ${num.value} foi adicionado` 
        lista.appendChild(item)
        res.innerHTML = ''  

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) { // verifica se já foram adicionados números no vetor
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length // variável tot recebe o tamanho do vetor, ou seja, a quantidade de números que já foram digitados
        
        let maior = valores[0] // recebe o primeiro valor como o maior número
        let menor = valores[0] // recebe o primeiro valor como o menor número
        let soma = 0
        let media = 0
        for (let pos in valores) { // varre o vetor em cada posição um por um 
            soma += valores[pos] // soma todos os valores do vetor
            if (valores[pos] > maior) { // se o valor nessa posição é maior, a variável maior recebe esse número
                maior = valores[pos]        
            }
            if (valores[pos] < menor) { // se o valor nessa posição é menor, a variável menor recebe esse número.
                menor = valores[pos]
            }
            
        }
        media = soma / tot // calcula a média dos valores 
        res.innerHTML = '' // limpa a div res, onde os resultados serão mostrados
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>` // mostra resultados na div res
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados ${media}. </p>`

    }
}
