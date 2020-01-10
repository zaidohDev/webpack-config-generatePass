

const rand = (min, max) => Math.floor(Math.random() *(max - min) + min)
const generateUpperCase = () => String.fromCharCode(rand(65, 91))
const generateLowerCase = () => String.fromCharCode(rand(97, 123))
const generateNumber = () => String.fromCharCode(rand(48, 58))
const simble = ',.;:?~^´`[]{}()!#$%&-_\/'
const generateSimble = () => simble[rand(0, simble.length)]


export default function generatePass(qnt, upperCase, lowerCase, number, simble){
  const array = []
  qnt = Number(qnt)

  for(let i = 0; i < qnt; i++){
    upperCase && array.push(generateUpperCase())
    lowerCase && array.push(generateLowerCase())
    number && array.push(generateNumber())
    simble && array.push(generateSimble())
    
  }
  return array.join('').slice(0, qnt)
}
