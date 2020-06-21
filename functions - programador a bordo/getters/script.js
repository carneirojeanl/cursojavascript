//A propriedade getters 'pega' um determinado valor //
//em um determinado objeto e trabalha com ele.//

let pacientes = [{
        nome:'Astolfo',
        idade: 66
},
{       nome: 'Lindalva',
        idade: 55

},
{       nome: 'Raimundoca',
        idade: 50

},
{
        nome: 'Zé Pedreiro',
        idade: 45
},
{
        nome: 'Adimilson',
        idade: 40
},
{
        nome: 'Corona',
        idade: 1
}]

    let select = {
        posicao: 0,
        password:0,
       get atual(){
            return pacientes[this.posicao]
        },
       get selectpacient(){
            return pacientes[this.password]


        },
        proximo(){
            return ++this.posicao
        },
        anterior(){
            return --this.posicao
        }


    }
//para a minha funcao se tornar uma propriedade e não ter parametros reais eu coloco get//
    // console.log(select.atual)
    // select.proximo()
    // console.log(select.atual)
    // select.proximo()
    // console.log(select.atual)
    // select.proximo()
    // console.log(select.atual)
    // select.proximo()
    // console.log(select.atual)
    // select.proximo()
    // console.log(select.atual)
    // select.anterior()
    // console.log(select.atual)
    
    // select.password = 3
    // console.log(select.selectpacient)

   