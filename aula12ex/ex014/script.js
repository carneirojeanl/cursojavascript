function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //var teste = img.img//
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML= `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src= 'fotomanha.jpg'
        document.body.style.background = '#D57B3C'

        //Bom dia
    } else if (hora >=12 && hora < 18){

        img.src= 'fototarde.jpg'
        document.body.style.background= '#5A6597'

        //Boa tarde

    } else if (hora>= 18) {
        img.src = 'fotonoite.jpg'
        document.body.style.background= '#0F1025'

        //Boa noite
    }

}    

