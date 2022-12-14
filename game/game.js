import cax from './js/libs/cax'

import Background from './js/background'
import Player from './js/player'
import EnemyGroup from './js/enemy-group'
import Music from './js/music'

const start = () => {
  const stage = new cax.Stage(1920, 1080, '#myCanvas')
  const bg = new Background()
  const player = new Player()
  const enemyGroup = new EnemyGroup()
  const music = new Music()

  const isBrowser = typeof window !== 'undefined'
  const screenHeight = isBrowser ? window.innerHeight : 0
  
  stage.add(bg, enemyGroup, player)

  stage.add(player.bulletGroup)

  let touchX = null
  let touchY = null

  stage.on('mousemove', function (e) {
    touchX = e.stageX
    touchY = e.stageY
  })

  function update() {
    stage.update()
    bg.update()

    player.update()
    if (touchX !== null) {
      player.x = touchX
      player.y = touchY
    }
    enemyGroup.update()

    enemyGroup.children.forEach((enemy) => {
      player.bulletGroup.children.forEach((bullet) => {
        if (bullet.isCollideWith(enemy)) {
          bullet.visible = false
          enemy.explode()
          music.playExplosion()
        }
      })
    })

    requestAnimationFrame(update)
  }

  // setTimeout(() => update(), 1000)
  update()

  const text = new cax.Text('powered by cax', {
    font: '20px Arial',
    color: '#42B035',
    baseline: 'top',
  })
  text.y = screenHeight - 30
  text.x = 4
  text.alpha = 0.6
  stage.add(text)

  cax.To.get(text).to().x(100, 2000, cax.easing.elasticInOut).start()
}

export default start
