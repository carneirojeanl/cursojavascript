function fatorial(n){
    let fat = 1
    let i = n

    for( i; i>1 ; i-- ){
        fat = fat*i

    }
    return fat 

}

console.log(fatorial(4))