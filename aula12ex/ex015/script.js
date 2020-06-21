function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = window.document.getElementById('foto')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] O valor ano está incorreto ou não foi preenchido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var fgrau = document.getElementsByName('grau')
        var idade = ano - Number(fano.value)
        var genero = ''
        var escolaridade = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.src = 'menino.png'

            } else if (idade < 21){ 
                //jovem
                img.src = 'homemjovem.png'
            } else if (idade < 50){
                //Adulto
                img.src = 'homemadulto.png'

            } else {
                //Idoso
                img.src = 'homemidoso.png'
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.src = 'menina.png'
                

            } else if (idade < 21){ 
                //jovem
                img.src = 'mulherjovem.png'
            } else if (idade < 60){
                //Adulto
                img.src = 'mulheradulta.png'

            } else {
                //Idoso
                img.src = 'mulheridosa.png'
            }

        }  if (fgrau[0].checked){
            escolaridade = 'Ensino Fundamental'
        } else if (fgrau[1].checked){
            escolaridade = 'Ensino Médio'
        }  if (fgrau[2].checked){
            escolaridade= 'Ensino Técnico'
        } else if (fgrau[3].checked) {
            escolaridade= 'Ensino Superior'
        }
        res.style.textAlign= 'center'
        res.innerHTML= `Detectado: ${genero} de ${idade} anos de idade. Com escolaridade:${escolaridade}!`
        res.appendChild(img)
    }

}