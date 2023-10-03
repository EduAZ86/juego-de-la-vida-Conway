import styles from './app.module.css'
import {useRef, useEffect, useState} from 'react'
import { gridClass } from './class/grid.class';
import { updateGeneration } from './utils/update_generation';
import { initialiceGrid } from './utils/initialice_grid';
import  Draw  from './utils/Draw_grid';
function App() {

  const mainCanvas = useRef<HTMLCanvasElement | null>(null);
  const WIDTH_CANVAS:number = 1400
  const HEIGHT_CANVAS:number = 1200
  const [generationCounter, setGenerationCounter] = useState(0)
  
  const GameOfLifeGrid = new gridClass(WIDTH_CANVAS, HEIGHT_CANVAS)
  
  useEffect(() => {
    const canvas = mainCanvas.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        initialiceGrid(GameOfLifeGrid);

        const intervalID = setInterval(() => {
          updateGeneration(GameOfLifeGrid);
          Draw(context, GameOfLifeGrid);
          setGenerationCounter((prevGenerationCounter) => prevGenerationCounter + 1) 
        }, 20);

        return () => {
          clearInterval(intervalID)
        }
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <span
        className={styles.counter}
      >
        {`Generation ${generationCounter}`}
      </span>
      <canvas
        className={styles.canvas}
        ref={mainCanvas}
        width={WIDTH_CANVAS}
        height={HEIGHT_CANVAS}    
      >
      </canvas>
    </div>
  )
}

export default App
