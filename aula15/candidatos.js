let candidatos = ['joão','Maria','Lucas','Ana', 'Raquel','Tiago']

/*let inicio = 0
for(inicio ; inicio < candidatos.length ; inicio++){
    console.log(`O candidato de posição número ${inicio} é ${candidatos[inicio]}.`)

}
*/

for(let pos in candidatos){
    console.log(`O candidato de posição ${pos} é  ${candidatos[pos]}.`)

}

let achar = candidatos.indexOf('Raquel')
console.log(`A Raquel ficou na posição de número ${achar}`)

