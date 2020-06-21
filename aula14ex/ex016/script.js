function contar(){
    var inicio = window.document.getElementById('Início')
    var fim = window.document.getElementById('Fim')
    var passo = window.document.getElementById('Passo')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')

    } else {
        res.innerHTML = 'Contando: <br> '
        
        if(Number(inicio.value) < Number(fim.value) ){
            
            for(var i = Number(inicio.value); i<= Number(fim.value) ; i = i + Number(passo.value)){
                res.innerHTML += `${i}\u{1F449} `
        
            }


        } else{
            for(var i = Number(inicio.value); i>= Number(fim.value) ; i = i - Number(passo.value)){

                res.innerHTML += `${i}\u{1F449}  `

            }


        }

    
       
       
        res.innerHTML += `\u{1F64C}	`
    
    
    }

   



}