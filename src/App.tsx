import './App.css'
import {useRef, useEffect, useState} from 'react'
import { gridClass } from './class/grid.class';
function App() {

  const mainCanvas = useRef<HTMLCanvasElement | null>(null);
  const WIDTH_CANVAS:number = 1500
  const HEIGHT_CANVAS:number = 1400
  const [generationCounter, setGenerationCounter] = useState(0)

  const initialiceGrid = (GameOfLifeGrid:gridClass) => {
  
    for (let i = 1; i < GameOfLifeGrid.matrix.length -1; i++) {
      for (let j = 1; j < GameOfLifeGrid.matrix[0].length -1; j++) {
        if ((i > ( (GameOfLifeGrid.matrix.length/2) - 3)) && (i < ( (GameOfLifeGrid.matrix.length/2) + 3)) ) {
          GameOfLifeGrid.matrix[i][j].setAlive(true)
        } else{
          GameOfLifeGrid.matrix[i][j].setAlive(false)
        }
      }
      
    }

  }

  const counter_Neighbor_alive = (GameOfLifeGrid:gridClass, pos_x:number, pos_y:number) => {
    const arrayNeighbor = [
      GameOfLifeGrid.matrix[pos_x-1][pos_y-1],
      GameOfLifeGrid.matrix[pos_x][pos_y-1],
      GameOfLifeGrid.matrix[pos_x+1][pos_y-1],
      GameOfLifeGrid.matrix[pos_x-1][pos_y],
      GameOfLifeGrid.matrix[pos_x+1][pos_y],
      GameOfLifeGrid.matrix[pos_x-1][pos_y+1],
      GameOfLifeGrid.matrix[pos_x][pos_y+1],
      GameOfLifeGrid.matrix[pos_x+1][pos_y+1],
    ]
    let counter = 0
    for (let i = 0; i < arrayNeighbor.length; i++) {
      if (arrayNeighbor[i].alive) {
        counter++
      }     
    }    
    return counter
  }

  const updateGeneration = (GameOfLifeGrid:gridClass) => {
    let copyOfGrid = GameOfLifeGrid.matrix.map(arr => arr.map(cell => cell.clone()));
    for (let i = 1; i < GameOfLifeGrid.matrix.length - 1 ; i++) {
      for (let j = 1; j < GameOfLifeGrid.matrix[0].length - 1; j++) {     
        if (GameOfLifeGrid.matrix[i][j].alive) {
          if (counter_Neighbor_alive(GameOfLifeGrid,i,j) < 2 || counter_Neighbor_alive(GameOfLifeGrid,i,j) > 3) {
            copyOfGrid[i][j].setAlive(false);
          }
        } else {
          if (counter_Neighbor_alive(GameOfLifeGrid,i,j) === 3) {
            copyOfGrid[i][j].setAlive(true);
          }
        }       
      }
    }
    GameOfLifeGrid.matrix = copyOfGrid;
  }
  
  
  
  
  const Draw = (ctx:any) => {
    for (let i = 0; i < GameOfLifeGrid.matrix.length; i++) {
      for (let j = 0; j < GameOfLifeGrid.matrix[0].length; j++) {
        ctx.fillStyle = (GameOfLifeGrid.matrix[i][j].alive? 'red' : 'black')
        ctx.fillRect(GameOfLifeGrid.matrix[i][j].possition_x,GameOfLifeGrid.matrix[i][j].possition_y,GameOfLifeGrid.matrix[i][j].height,GameOfLifeGrid.matrix[i][j].width)
      }
      
    }
    
  }
  
  const GameOfLifeGrid = new gridClass(WIDTH_CANVAS, HEIGHT_CANVAS)
  
  useEffect(() => {
    const canvas = mainCanvas.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        initialiceGrid(GameOfLifeGrid);

        const intervalID = setInterval(() => {
          updateGeneration(GameOfLifeGrid);
          Draw(context);
          setGenerationCounter(generationCounter+1) 
        }, 20);

        return () => {
          clearInterval(intervalID)
        }
      }
    }
  }, []);

  return (
    <div className='w-screen h-screen flex-col bg-gray-300'>
      <span
        className='text-center'
      >
        {`Generacion Nº ${generationCounter}`}
      </span>
      <canvas
        ref={mainCanvas}
        width={WIDTH_CANVAS}
        height={HEIGHT_CANVAS}
        className ='w-screen h-fit'

      >

      </canvas>
    </div>
  )
}

export default App
