function findNaughtyStep(original, modified) {
  let s = '';
  let i = 0;
  while(s=='' && (i<original.length || i<modified.length)){
    let actOriginal = original.substring(i,i+1);
    let actModified = modified.substring(i,i+1);
    let sigOriginal = original.substring(i+1,i+2);
    let sigModified = modified.substring(i+1,i+2);
    if(actOriginal==''){
        s += actModified;
    }
    else if(actModified==''){
        s += actOriginal;
    }
    else if(actOriginal!=actModified){
        if(sigModified == actOriginal)
            s += actModified;
        if(sigOriginal == actModified)
            s += actOriginal;
    }
    i++;
  }
  return s;
}

let original = 'abcd'
let modified = 'abcde'
console.log(findNaughtyStep(original, modified)); // 'e'

original = 'stepfor'
modified = 'stepor'
console.log(findNaughtyStep(original, modified)); // 'f'

original = 'stepor'
modified = 'stepfor'
console.log(findNaughtyStep(original, modified)); // 'f'

original = 'abcde'
modified = 'abcde'
console.log(findNaughtyStep(original, modified)); // ''

original = ''
modified = 'a'
console.log(findNaughtyStep(original, modified)); // 'a'