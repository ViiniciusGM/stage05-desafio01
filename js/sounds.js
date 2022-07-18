

export default function(){

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  const treeSound = new Audio('../sounds/Floresta.wav')
  const rainSound = new Audio('../sounds/Chuva.wav')
  const coffeSound = new Audio('../sounds/Cafeteria.wav')
  const fireSound = new Audio('../sounds/Lareira.wav')

  treeSound.loop = true
  rainSound.loop = true
  coffeSound.loop = true
  fireSound.loop = true

  function soundTree(){
    treeSound.play()
  }

  function soundRain(){
    rainSound.play()
  }

  function soundCoffe(){
    coffeSound.play()
  }

  function soundFire(){
    fireSound.play()
  }
  return{
    pressButton,
    timeEnd,
    soundTree,
    soundRain,
    soundCoffe,
    soundFire,
  }
}