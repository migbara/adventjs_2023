function manufacture(gifts, materials) {
    let list = [];
    let j = 0;
    while (j < gifts.length) {
        // console.log(gifts[j]);
        let encontrado = true;
        for (let k = 0; k < gifts[j].length; k++) {
            // console.log(gifts[j].substring(k,k+1));
            if (!materials.includes(gifts[j].substring(k,k+1)))
                encontrado = false;
        }
        if (encontrado)
            list.push(gifts[j]);
        j++;
    }

    return list;
}


let gifts = ['tren', 'oso', 'pelota']
let materials = 'tronesa'

console.log(manufacture(gifts, materials)); // ["tren", "oso"]

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

console.log(manufacture(gifts, materials)); // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

console.log(manufacture(gifts, materials)); // []

