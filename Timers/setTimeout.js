// setTimeout rodar uma função depois de X milisegundos

const timeout = 3000
const finished = () => console.log('Done!')
setTimeout(finished, timeout)
console.log('Mostrar') // Assíncronismo executou antes o console e depoia a função