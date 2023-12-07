function maxDistance(movements) {
    let mas = movements.replace(/[^>]/g, "").length;
    let menos = movements.replace(/[^<]/g, "").length;
    let especial = movements.replace(/[^*]/g, "").length;
    return Math.abs(mas - menos) + especial;
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5