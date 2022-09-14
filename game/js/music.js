let instance

/**
 * 统一的音效管理器
 */
export default class Music {
  constructor () {
    if (instance) { return instance }

    instance = this

    this.bgmAudio = document.createElement("AUDIO")
    this.bgmAudio.loop = true
    this.bgmAudio.src = '/audio/bgm.mp3'

    this.shootAudio = document.createElement("AUDIO")
    this.shootAudio.src = '/audio/bullet.mp3'

    this.boomAudio = document.createElement("AUDIO")
    this.boomAudio.src = '/audio/boom.mp3'

    this.playBgm()
  }

  playBgm () {
    this.bgmAudio.play()
  }

  playShoot () {
    // this.shootAudio.currentTime = 0
    this.shootAudio.play()
  }

  playExplosion () {
    // this.boomAudio.currentTime = 0
    this.boomAudio.play()
  }
}
