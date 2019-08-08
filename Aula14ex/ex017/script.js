function tabuada() {
    // variável num pega o id 'txtn' da caixa de texto onde o número será digitado.
    let num = document.getElementById('txtn')
    // variável tab pega o id 'seltab' da área do select  
    let tab = document.getElementById('seltab')
    
    // se o número tiver vazio, ou seja, tamanho 0
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        // variável n converte para número o valor digitado.
        let n = Number(num.value)
        let c = 1;
        tab.innerHTML = '' // antes começar a tabuada, limpa a anterior
        while (c <= 10) {
            // criando um elemento option de forma dinâmica no html
            let item = document.createElement('option')
            // a parte de dentro do option
            item.text = `${n} x ${c} = ${n*c}`
            // é o valor de cada linha do select 
            item.value = `tab${c}`
            // para aparecer na tela, ou seja, adiciona um elemento filho
            tab.appendChild(item)
            c++
        }
    }
    
}