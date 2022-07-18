

export default function(){

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  const treeSound = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Floresta.wav?raw=true")
  const rainSound = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Chuva.wav?raw=true")
  const coffeSound = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Cafeteria.wav?raw=true")
  const fireSound = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Lareira.wav?raw=true")

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
