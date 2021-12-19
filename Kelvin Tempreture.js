//Constant kelvin temperture 
const kelvin = 300;

//Celsius temperture 
const celsius = kelvin - 273;

let newton = celsius * (33/100);

newton = Math.floor (newton);

//Fahrenheit temperture
let fahrenheit = celsius * (9/5) + 32;

//Rounding the decimal to a rounded number 
fahrenheit = Math.floor (fahrenheit);

console.log (`The temperature is ${newton} degrees Fahrenheit`)