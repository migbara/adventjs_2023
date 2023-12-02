function findFirstRepeated(gifts) {
  let repeat = [];
  for (let element in gifts) {
    if (repeat.includes(gifts[element])) return gifts[element];
    else repeat.push(gifts[element]);
  }
  return -1;
}

let giftIds = [2, 1, 3, 5, 3, 2];
let firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

let giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// Es -1 ya que no se repite ningún número

let giftIds3 = [5, 1, 5, 1];
let firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
