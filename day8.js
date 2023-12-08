function organizeGifts(gifts) {
    let result = "";
    let tipos = gifts.replace(/[0-9]/g,"").split("");
    let cantidades = gifts.replace(/[^0-9]/g,"#").split("#");
    // console.log(tipos,cantidades);
    for (let i = 0; i < tipos.length; i++) {
        let tipo = tipos[i];
        let cantidad = cantidades[i];
        // console.log(tipo,cantidad);
        
        let pales = Math.floor(cantidad / 50);
        let cajas = Math.floor((cantidad % 50) / 10);
        let enBolsa = (cantidad % 50) % 10;

        // console.log(pales,cajas,enBolsa);

        for (let p = 0; p < pales; p++) {
            result += `[${tipo}]`;
        }

        for (let c = 0; c < cajas; c++) {
            result += `{${tipo}}`;
        }
        if(enBolsa > 0) {
            result += '(';
            for (let b = 0; b < enBolsa; b++) {
                result += tipo;
            }
            result += ')';
        }
    }
    return result;
}
const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'