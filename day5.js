function cyberReindeer(road, time) {
    let result = [];
    let act = road;
    let pos = 1;
    let bg = '.' + act.substring(1);
    for (let i = 0; i < time; i++) {
        if(i==5){
            act = act.replaceAll('|','*');
            bg = bg.replaceAll('|','*');
        }
        if (i > 0) {
            if(act.substring(pos,pos+1)!='|'){
                act = act.slice(0,pos-1) + bg.substring(pos-1,pos) + 'S' + act.slice(pos+1);
                pos++;
            }
        }
        result.push(act);
    }
    return result;
}


const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

console.log(result);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/