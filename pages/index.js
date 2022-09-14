import React, { useEffect } from 'react'
import start from '../game/game.js'

export default function Home() {
  useEffect(() => {
    start();
  }, [])
  
  return <canvas  id='myCanvas'></canvas>
}
