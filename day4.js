function decode(message){
    let pila = [];
    let tampila = 0;
    pila[tampila] = ''; 
    if(message!=''){
        for (let i = 0; i < message.length; i++) {
            const letra = message.substring(i,i+1);
            if(letra=='('){
                tampila++;
                pila[tampila] = letra;
                // console.log(pila);
            }
            else if(letra==')'){
                let s = pila[tampila].substring(1);
                pila[tampila] = [...s].reverse().join("");
                tampila--;
                pila[tampila] += pila[(tampila+1)];
                pila.pop();
            }
            else{
                pila[tampila] += letra;
            }
        }
    }
    // console.log(pila);
    return pila[0];
}
  
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const d = decode('((nta)(sa))')
console.log(d) // santa

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus