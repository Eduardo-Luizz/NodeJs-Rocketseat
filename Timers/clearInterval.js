// clearInterval cancela um setInterval após X tempo

const timeout = 1000
const checking = () => console.log('check')

let interval = setInterval(checking, timeout)

setTimeout( () => clearInterval(interval), 7000) // para a execução da função interval após 7 segundos