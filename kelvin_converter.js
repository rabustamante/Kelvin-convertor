// var that is constant that holds 293
const kelvin = 0;
// var called celisus that stores kelvin - 273
let celsius = kelvin - 273;
// equation that calclates Fahrenheit
let farhrenheit = celsius * (9 / 5) + 32;
//rounds down when coverting to F to C
farhrenheit = Math.floor(farhrenheit);
// prints the results
console.log(`The temperature is ${farhrenheit} degrees Fahrenheit`);
// convert to newton
let newton = celsius * (33 /100);
//rounds down
newton = Math.floor(newton);
// prints the results
console.log(`The temperature is ${newton} Newton`);