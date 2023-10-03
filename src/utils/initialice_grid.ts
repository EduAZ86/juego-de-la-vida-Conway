import { gridClass } from "../class/grid.class"
export   const initialiceGrid = (GameOfLifeGrid:gridClass) => {
  
    for (let i = 1; i < GameOfLifeGrid.matrix.length -1; i++) {
      for (let j = 1; j < GameOfLifeGrid.matrix[0].length - 21; j++) {
        if ((i > ( (GameOfLifeGrid.matrix.length/5) - 10)) && (i < ( (GameOfLifeGrid.matrix.length/2) + 30)) ) {
          GameOfLifeGrid.matrix[i][j].setAlive(true)
        } else{
          GameOfLifeGrid.matrix[i][j].setAlive(false)
        }
      }      
    }
  }