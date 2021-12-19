//Constant kelvin temperture 
const kelvin = 300;

//Celsius temperture 
const celsius = kelvin - 273;

//Fahrenheit temperture
let fahrenheit = celsius * (9/5) + 32;

//Rounding the decimal to a rounded number 
fahrenheit = Math.floor (fahrenheit);

console.log (`The temperature is ${fahrenheit} degrees Fahrenheit`)
