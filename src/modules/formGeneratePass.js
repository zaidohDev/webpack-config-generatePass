import  generatePass from './generatePass';

const pass = document.querySelector('.generatePass')
const qntChar = document.querySelector('.qnt-char')
const charUpper = document.querySelector('.char-upper')
const charLower = document.querySelector('.char-lower')
const charNumbers = document.querySelector('.char-numbers')
const charSimbles = document.querySelector('.char-simbles')
const generateBtn = document.querySelector('.generate')

export default () => {
  
  generateBtn.addEventListener('click', () =>{
    pass.innerHTML = gera()
  })
}

function gera(){
  const pass = generatePass(
    qntChar.value,
    charUpper.checked,
    charLower.checked,
    charNumbers.checked,
    charSimbles.checked
  )
  
  return pass || 'No options selected'
}
