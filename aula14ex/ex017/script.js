function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //serve para limpar o display da  minha tabuada antes de partir pra outra conta//
        
        
        for( n ; c <= 10 ; c= c+1){
            let item = document.createElement('option') //criei um elemento option dinamicamente dentro de js sem fazer isso no html.//
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)        //sempre que criar um elemento html dentro de js é necessário referenciar ele usando appendchild - elemento filho//





        }
        

        

    }


}