let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []


function isnumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true

    } else{
        return false
    }


}

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    } else{
        return false
        
    }

}




function adicionar(){
    
    if(isnumero(num.value) && !inlista(num.value,valores)){
        valores.push(Number(num.value))                         //como referenciar um array na function//
         let val = document.createElement('option')
        val.text = num.value
        lista.appendChild(val)
        res.innerHTML = ''
        
        
        

               

    } else{
        window.alert('Valor inválido ou já se encontra na lista')
    }
    num.value = ''
    num.focus()

}

function contas(){
    let tot = valores.length
    let maior = valores[0] //no for in a let determina o inicio do for. //
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores ){
        soma += valores[pos]
        if(valores[pos] > maior)
        maior = valores[pos]
        if(valores[pos] < menor)
        menor = valores[pos]
    }


    res.innerHTML = ''
    res.innerHTML += `<p>O total de números cadastrados é de ${tot}.</p>`
    res.innerHTML += `<p>O maior valor da lista é ${maior}.</p>`
    res.innerHTML += `<p>O menor valor da lista é ${menor}.</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
    res.innerHTML += `<p>A média de todos os valores é ${soma/tot}.</p>`


    

    

}
