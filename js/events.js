import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonTree,
  buttonRain,
  buttonCoffeShop,
  buttonFire,
  body
} from "./elements.js"

export default function events({controls, timer, sound}){
  buttonPlay.addEventListener("click", function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', () => {
    controls.pause()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', () => {
    timer.stopTime()
    sound.pressButton()
  })
  
  buttonAdd.addEventListener('click', () => {
    timer.addTime()
    sound.pressButton()
  })
  
  buttonRemove.addEventListener('click', () => {
    timer.removeTime()
    sound.pressButton()
  })

  // ====== SOUND ============================

  function bgChanger(bgType, btnType) {
    body.classList.toggle(bgType)
    btnType.classList.toggle('cardjs')
  }
  
  buttonTree.addEventListener('click', function(){
    sound.soundTree()
    bgChanger('tree-bg', buttonTree)
  })
  
  buttonRain.addEventListener('click', function(){
    sound.soundRain()
    bgChanger('rain-bg', buttonRain)
  })
  
  buttonCoffeShop.addEventListener('click', function(){
    sound.soundCoffe()
  
    bgChanger('coffe-bg', buttonCoffeShop)
  })
  
  buttonFire.addEventListener('click', function(){
    sound.soundFire()
    bgChanger('fire-bg', buttonFire)
  })
}