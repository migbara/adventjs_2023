function drawGift(size, symbol) {
    let p = '';
    let shift = size-1;
    let first = true;
    
    //Primera línea
    while(shift>= -size+2 ){
        
        //First part
        while(shift >= 0){
            for (let i = 0; i < shift; i++) {
                p += ' ';
            }
            if(first){
                for (let i = 0; i < size; i++) {
                    p += '#';
                }
                p += "\n";
                first = false;
            }
            else{
                p += '#';
                for (let i = 0; i < size-2; i++) {
                    if(shift>0)
                        p += symbol;
                    else
                        p += '#';
                }
                p += '#';
                for (let i = 0; i < (size-2-shift); i++) {
                    p += symbol;
                }
                p += "#\n";
            }
            shift--;
        }
        
        //Second part
        if(size>2){
            p += '#';
            for (let i = 0; i < size-2; i++) {
                p += symbol;
            }
            p += '#';
            for (let i = 0; i < (size-2+shift); i++) {
                p += symbol;
            }
            p += "#\n";
        }

        shift--;
    }
    for (let i = 0; i < size; i++) {
        p += '#';
    }

    return `${p}\n`;
}

console.log(drawGift(2, "&"));
/*
 ##
###
##
*/

console.log(drawGift(4, '+'));

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'));
/*
#
*/