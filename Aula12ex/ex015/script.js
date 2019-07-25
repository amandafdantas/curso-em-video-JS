function verificar() {
    var data = new Date()
    var ano = data.getFullYear()    // pega o ano com 4 dígitos, ex: 2019
    var fano = document.getElementById('txtano')  // txtano é o id da caixa de texto ano de nascimento
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')     // cria uma tag img
        img.setAttribute('id', 'foto')              // essa linha é como se fosse no html na tag img criada acima, e colocasse um id de nome foto 
                                                    // exemplo: <img id='foto'>

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança   
               img.setAttribute('src', 'foto-bebe-m.jpg')     
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')     
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')     
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')     
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança            
                img.setAttribute('src', 'foto-bebe-f.jpg')     
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')   
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulta-f.jpg')    
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idosa-f.jpg')  
            }
        }
        // para centralizar o texto
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        // Adicionando o elemento img na div com id='res'
        res.appendChild(img)                                         
    }
}