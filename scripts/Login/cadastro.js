// valorCriptografado = NOVOzaszyfrujhasło("israelbonicenha13az@gmail.com")
// console.log(valorCriptografado)

// ESCREVI COISAS EM OUTRA LINGUA PARA DIFICULTAR O REVERSO
// NÃO SEI NEM SE VOU CONSEGUIR REVERTER NA API KKKKKKKK

/*
    Um problema que notei com esse algoritmo é que:
    
    - Ele vai entrar num loop infinito se o número 
    de caracteresrepetidos na string total for 
    maior que 39. Exemplo: só pode ter 39 "T"
    ou "1" na string total do cliente.
*/

function NOVOzaszyfrujhasło(hasło) {

    let krypto = ""
    let idxCaract = 0
    let nowyZnakList = []
    let caracteresList = []
    let idxCaracteresList = []
    for(lt = 0;lt<hasło.length;lt++){
        znak = hasło[lt].charCodeAt() 
        //console.log(znak*znak/3.14)

        if(caracteresList.includes(znak)){
            idxCaracteresList.push(idxCaracteresList[caracteresList.indexOf(znak)])
        }else{
            caracteresList.push(znak)
            idxCaracteresList.push(idxCaract)
            idxCaract++
        }

        nowyZnak = String(parseInt(znak*znak*znak*znak)).padStart(10, '0')
        //console.log(nowyZnak)

        while(true){
            if(nowyZnakList.includes(nowyZnak)){
                nowyZnak = String(parseInt(nowyZnak/1.57)).padStart(10, '0')
            }else{
                nowyZnakList.push(nowyZnak)
                break
            }
        }

        nowyZnak = String(parseInt(idxCaracteresList[lt])).padStart(4, '0') + nowyZnak
        krypto += nowyZnak 
    }
    

    //console.log(caracteresList)
    //console.log(idxCaracteresList)
    //console.log(krypto)
    //console.log(krypto.length)
    krypto = ZmieńWartości(krypto)
    //console.log(krypto)

    kryptoFinal = strReduzida(krypto)
    return kryptoFinal
}

function ZmieńWartości (krypto) {
    krypto = krypto.replace(/1/g,"B")
    krypto = krypto.replace(/2/g,"D")
    krypto = krypto.replace(/3/g,"F")
    krypto = krypto.replace(/4/g,"H")
    krypto = krypto.replace(/5/g,"K")
    krypto = krypto.replace(/6/g,"M")
    krypto = krypto.replace(/7/g,"P")
    krypto = krypto.replace(/8/g,"R")
    krypto = krypto.replace(/9/g,"T")
    krypto = krypto.replace(/0/g,"W")

    //console.log(krypto)
    krypto = ZmieńWartości1(krypto)

    return krypto
}

function ZmieńWartości1 (krypto) {

    krypto = _E(krypto,parseInt(krypto.length/3))

    let blocs = []
    
    for(let i=0;i<krypto.length;i+=8){
        blocs.push(krypto.slice(i, i + 8))
    }

    krypto = ZmieńWartościEmBloco(blocs)

    return krypto
}

function _E (str, int){
    return str.slice(int) + str.slice(0, int);
}

function ZmieńWartościEmBloco (blocs) {

    //console.log(blocs)

    novosblocs = []
    for(let i=0;i < blocs.length; i++){
        if(i % 2 == 0){
            valor = D_(String(blocs[i]),String(blocs[i]).length/3.14)
            valor = valor.replace(/B/g,"C")
            valor = valor.replace(/H/g,"E")
            valor = valor.replace(/P/g,"G")
            valor = valor.replace(/W/g,"J")

            novosblocs.push(valor)
            //console.log(valor)
            //console.log(novosblocs)
        }else{
            valor = blocs[i]

            novosblocs.push(valor)
            //console.log(valor)
        }
    }
    //console.log(novosblocs)

    newKryptoP = ""
    newKryptoI = ""
    for(let i=0;i < novosblocs.length; i++){
        if(i % 2 == 0){
            newKryptoP += novosblocs[i]
        }
        else{
            newKryptoI += novosblocs[i]
        }
    }

    let newKripto = newKryptoP + newKryptoI
    //console.log(newKripto)
    return newKripto
}

function D_ (str, int){
    return str.slice(-int) + str.slice(0, -int);
}

function strReduzida(krypto) {

    repets = 1
    kryptoFinal = ""
    for(i=0;i<=krypto.length-1;i++){

        if(krypto[i+1]==krypto[i]){
            repets++
        }
        else{

            if(repets==1){
                kryptoFinal += krypto[i];
            }else{
                kryptoFinal += repets + krypto[i];
                repets=1
            }
        }
    }

    //console.log(kryptoFinal)
    //console.log(krypto.length)
    //console.log(kryptoFinal.length)

    return kryptoFinal
}