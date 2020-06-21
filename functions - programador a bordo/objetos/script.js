/*let dados = {
    nome: 'jean',
    idade: 24,
    cidade: 'São Joaquim',
    estado: 'Santa Catarina'
}

dados.hobbies = ['futebol', 'video game', 'viajar','praia'] //adicionando um valor ao meu objeto//

delete dados.idade   //deletando um valor//
*/


// let cumprimentar = {
//     digaOlá: function(nome){
//         return `Olá , ${nome} .`

//     } ,

//     idade: function(idade){
//         return `A sua idade é ${idade}.`
//     }

// }

// console.log(cumprimentar.digaOlá('Jean'), cumprimentar.idade('24 anos'))

 


//Quando vc quiser que retornar apenas os valores do objeto//

//  let dados = {
//     nome: 'Jean',
//     idade: 24 ,
//     cidade: 'São Joaquim'
// }
// console.log(Object.values(dados))  //dessa forma vai mostrar na tela apenas os valores das minhas keys//




//COMO USAR O FOR IN EM OBJETOS//


let dados = {
    nome: 'Jean',
    idade: 24 ,
    cidade: 'São Joaquim',
    estado: 'Santa Catarina'
}

for(let pos in dados){
    console.log(dados[pos])
}

