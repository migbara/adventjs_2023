function adjustLights(lights) {
    const isGreen = light => light == '🟢';
    let value = isGreen(lights[0]);
    let cont = 0;
    lights.forEach(element => {
        if(isGreen(element) != value){
            cont++;
        }
        value = !value;
    });
    let values = [cont];
    //Ahora empezamos por el final
    value = isGreen(lights[lights.length-1]);
    cont = 0;
    for (let i = lights.length-1; i >= 0; i--){
        const element = lights[i];
        if(isGreen(element) != value){
            cont++;
        }
        value = !value;     
    }
    values.push(cont);
    let result = Math.min(...values);
    return result;
}


console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']));
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']));
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']));
// -> 1 (cambias la segunda luz a 🟢)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']));