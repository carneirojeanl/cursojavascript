//This é um objeto - No seu modo inicial This comporta todas as propriedades e valores de window.
//Mas quando vc quer que this referencie apenas os obejtos que você criou, você usa a propriedade NEW.//

//Exemplo://
    
function meusDados(){
    this.nome = 'Jean Carneiro'
    this.idade = 24
    this.cidade = 'São Joaquim'
    this.estado = 'Santa Catarina'
    this.imc = function(peso , altura){
        return peso / altura
    }

}

let dados = new meusDados()
console.log(dados , dados.imc(84,182))


