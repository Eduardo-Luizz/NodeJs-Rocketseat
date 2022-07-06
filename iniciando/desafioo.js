const getFlagvalues = require('./desafio')

console.log(`Oi ${getFlagvalues('--name')}, ${getFlagvalues('--greeting')}`);