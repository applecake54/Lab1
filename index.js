//dependencia
const calculator = require('birthday-calculator');

const date = new Date('2004,07,21');
const result = calculator.getDayWhenBorn(date);
console.log(result);

//dependencia de desarrollador
const math = require(`mathjs`)

console.log(math.sqrt(-45))